// Add your code here
function submitData(name, email) {
  let form = {
    name: name,
    email: email,
  };
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.body.innerHTML = data.id;
    })
    .catch((error) => {
      console.log(error.message);
      document.body.innerHTML = error.message;
    });
}