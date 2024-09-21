let employees = [
    { name: "Cavid", department: "Is", position: "IT" },
    { name: "Elsever", department: "Is", position: "security" },
    { name: "Murad", department: "Is", position: "yoxlayici" },
    { name: "Ismail", department: "Is", position: "buqalter" },
    { name: "Emil", department: "Is", position: "yaradici" },
    { name: "Zamiq", department: "Is", position: "menedjer" },
    { name: "Ugur", department: "Is", position: "tehlukesizlik sistemi"},
    { name: "Kanan", department: "Is", position: "arxitektor" },
    { name: "Ruslan", department: "Is", position: "Yoxlayici" },
    { name: "Elnur", department: "Is", position: "yazici" }
  ];
  

  let devDepartment = employees.filter(employee => employee.department === "Is");
  
  console.log(devDepartment);