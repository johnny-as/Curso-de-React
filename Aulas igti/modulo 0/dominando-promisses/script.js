let employeesPromise = fetch("http://localhost:3000/employees");
//
function soluction1(){
employeesPromise.then((r1) => {
  r1.json().then((employees) => {
    let rolesPromise= fetch("http://localhost:3000/roles");
    rolesPromise.then((r2) => {
      r2.json().then((roles) => {
        let table = renderTable(employees, roles);
        document.getElementById("app").innerHTML = table;
      });
    });
  });
});
}
//soluction1();

function fetchJson(url){
  return fetch(url).then((r) => {
    return r.json();
  });
}

function soluction2(){
  fetchJson("http://localhost:3000/employees").then((employees) => {
      fetchJson("http://localhost:3000/roles").then((roles) => {
        let table = renderTable(employees, roles);
        document.getElementById("app").innerHTML = table;
      });
    });
}
//soluction2();

function soluction3(){
  Promise.all([
    fetchJson("http://localhost:3000/employees"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  })
}
soluction3();

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join('')}</table>`;
}

