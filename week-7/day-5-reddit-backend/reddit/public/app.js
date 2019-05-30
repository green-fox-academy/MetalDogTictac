const API_URL = "http://localhost:3000";

const renderPosts = posts => {
  const appEl = document.querySelector("#app");
  const postsMap = posts.map(post => {
    return `<div>${post.title}</div>`;
  });
  appEl.innerHTML = postsMap.join("");
};

// Version 1
// Fetch performs async request and returns the promise
/*fetch(`${API_URL}/posts`)
	.then(response => {
		if (!response.ok) {
			//throwing an exception results in calling the nearest catch
			throw new Error('API Error')
		}
		// response.json() returns promise again and calls the next Then
		return response.json()
	})
	.then(jsonData => {
		renderPosts(jsonData.posts)
	})
	.catch(err => console.error(err))*/

// Version 2
const callApi = (method, endpoint, options = {}) => {
  const fetchOptions = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  if (options.body) {
    fetchOptions.body = options.body;
  }

  return fetch(`${API_URL}/${endpoint}`, fetchOptions).then(response => {
    if (!response.ok) {
	  console.log(response);
	  //throwing exception calls the next catch
      throw new Error("API error");
    }
    // response.json() returns promise again and calls the next then
    return response.json();
  });
};

const callGet = endpoint => {
  return callApi("GET", endpoint);
};

const callPost = (endpoint, data) => {
  return callApi("POST", endpoint, { body: JSON.stringify(data) });
};

const callPut = (endpoint, data) => {
  return callApi("PUT", endpoint, { body: JSON.stringify(data) });
};

const callDelete = endpoint => {
  return callApi("DELETE", endpoint);
};

/*callGet('posts')
	.then(jsonData => renderPosts(jsonData.posts))

callPost('posts', { title: `Example ${new Date().getTime()}`, url: 'www.example.com', user_id: 1 })
	.then(jsonData => console.log(jsonData))*/

window.onload = () => {
  const formEl = document.querySelector("#registrationForm");

  formEl.addEventListener("submit", event => {
    event.preventDefault();

    const registrationData = {};
    const inputs = formEl.querySelectorAll("input");
    inputs.forEach(input => {
      if (input.value !== "") {
        registrationData[input.name] = input.value;
      }
    });

	// sending to the users endpoint as the data of the registration 
	    callPost("users", registrationData).catch(err => {});
  });
};
