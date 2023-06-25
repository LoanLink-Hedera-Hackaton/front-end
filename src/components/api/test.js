// fetch("https://loanlink-backend.onrender.com/api/charge", {
//   method: "POST",

// body: JSON.stringify({
//   title: "foo",
//   body: "bar",
//   userId: 1,
// }),

//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

fetch("https://loanlink-backend.onrender.com/api/charge")
  .then((response) => response.json())
  .then((json) => console.log(json));
