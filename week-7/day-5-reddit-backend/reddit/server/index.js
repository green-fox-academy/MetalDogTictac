const express = require("express");
const mysql = require("mysql");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const POSTS_TABLE = "posts";
const USERS_TABLE = "users";
const COUPONS_TABLE = "coupons";

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

const conn = mysql.createConnection({
  host: "0.0.0.0",
  user: "user",
  password: "password",
  database: "db"
});

conn.connect(err => {
  if (err) {
    console.log(err.toString());
    return;
  }
  console.log("connection to DB is OK ✨");
});

const findById = (table, id, res) => {
  conn.query(`SELECT * FROM ${table} WHERE id = ?;`, [id], (err, result) => {
    if (err) {
      res.status(500).json(err.toString());
      return;
    }
    res.json(result);
  });
};

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// List
app.get("/posts", (req, res) => {
  conn.query(`SELECT * FROM ${POSTS_TABLE};`, (err, posts) => {
    if (err) {
      res.status(500).json(err.toString());
      return;
    }
    res
      .set("Content-Type", "application/json")
      .status(200)
      .send({ posts });
  });
});

// Create
app.post("/posts", (req, res) => {
  // const title = req.body.title
  // const url = req.body.url
  const { title, url, user_id } = req.body;

  if (!title || !url || !user_id) {
    res.status(400).json("Missing required fields title, url or user_id");
    return;
  }

  conn.query(
    `INSERT INTO ${POSTS_TABLE} SET ?;`,
    { title, url, user_id },
    (err, result) => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      // we want to obtain the input record, but we dont know it's ID, thus we use result.insertId, which does contain the searched ID
      conn.query(
        `SELECT * FROM ${POSTS_TABLE} WHERE id = ?;`,
        [result.insertId],
        (err, result) => {
          if (err) {
            res.status(500).json(err.toString());
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

// Update
app.put("/posts/:postId", (req, res) => {
  const { postId } = req.params;
  const { title, url } = req.body;

  if (!title || !url) {
    res.status(400).json("Missing required fields title or url");
    return;
  }

  const updateData = { timestamp: new Date(), title, url };

  conn.query(
    `UPDATE ${POSTS_TABLE} SET ? WHERE id = ?;`,
    [updateData, postId],
    err => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      // we will use postId, as it contains the ID of the updated record
      conn.query(
        `SELECT * FROM ${POSTS_TABLE} WHERE id = ?;`,
        [postId],
        (err, result) => {
          if (err) {
            res.status(500).json(err.toString());
            return;
          }
          res.json(result);
        }
      );
    }
  );
});

// Upvote
app.put("/posts/:postId/upvote", (req, res) => {
  const { postId } = req.params;

  conn.query(
    `UPDATE ${POSTS_TABLE} SET score = score + 1 WHERE id = ?;`,
    [postId],
    err => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      findById(POSTS_TABLE, postId, res);
    }
  );
});

//downvote
app.put("/posts/:postId/downvote", (req, res) => {
  const { postId } = req.params;

  conn.query(
    `UPDATE ${POSTS_TABLE} SET score = score - 1 WHERE id = ?;`,
    [postId],
    err => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      findById(POSTS_TABLE, postId, res);
    }
  );
});

// Delete
app.delete("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  conn.query(
    `SELECT * FROM ${POSTS_TABLE} WHERE id = ?;`,
    [postId],
    (err, result) => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      const post = result;
      conn.query(`DELETE FROM ${POSTS_TABLE} WHERE id = ?;`, [postId], err => {
        if (err) {
          res.status(500).json(err.toString());
          return;
        }
        res.json(post);
      });
    }
  );
});

// Add user
app.post("/users", (req, res) => {
  const { name, email, password, couponCode } = req.body;
  let credits = 0;
  //set password only to contain letters from Latin alphabet
  const passwordRegex = /^[a-zA-Z]+$/;

  if (!name || !email || !password) {
    res.status(400).json("Missing required fields name, email or password");
    return;
  }
  //testing if password complies to desired regex
  if (!passwordRegex.test(password)) {
    res
      .status(400)
      .json("Password can only contain letters from the latin alphabet");
    return;
  }

  // check if a user with the given email already exists
  conn.query(
    `SELECT * FROM ${USERS_TABLE} WHERE email = ?`,
    [email],
    (err, result) => {
      if (err) {
        res.status(500).json(err.toString());
        return;
      }
      // if result.length is bigger than zero, it means such user already exists, then error 400 comes up
      if (result.length > 0) {
        res.status(400).json({ message: "Email already exist" });
        return;
      }

      // check if the given coupon already exists
      conn.query(
        `SELECT * FROM ${COUPONS_TABLE} WHERE name = ?`,
        [couponCode],
        (err, result) => {
          if (err) {
            res.status(500).json(err.toString());
            return;
          }
          if (result.length > 0) {
            const coupon = result[0];
            if (coupon.remaining > 0) {
              // setting credit with coupon value for the user
              credits = coupon.value;

              // updating the coupon in the database => decrease "remaining" by 1
              conn.query(
                `UPDATE ${COUPONS_TABLE} SET remaining = remaining - 1 WHERE name = ?`,
                [couponCode],
                err => {
                  if (err) {
                    res.status(500).json(err.toString());
                    return;
                  }
                }
              );
            }
          }
        }
      );
    }
  );
});

app.use((req, res) => {
  res.status(404).json("Sorry can't find that!");
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
