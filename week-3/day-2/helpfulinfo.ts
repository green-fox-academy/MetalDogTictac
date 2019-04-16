function readFile(path) {
  return fs.readFileSync(path, 'UTF-8');
}

try {
  const content = readFile('mySource.txt');
  //const content = fs.readFileSyne('mySource', 'UTF-8'); these two lines 6 and 7 are equivalent
  err = {
    'THE MAIN': 'text here',
    path: 'mySource.txt',
    mode: '',

  }

} catch (err) {
  console.log(err.path); //custom information about the error
  console.log('custom message here' + err.path);
}