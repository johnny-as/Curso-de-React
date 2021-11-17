let summaryPromise = fetch("http://localhost:3000/employees");

summaryPromise.then((resp) => {
  resp.json().then((summary) => {
    console.log("summary");
  });
});
