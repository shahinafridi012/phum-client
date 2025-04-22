const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, item) => {
  console.log(acc);
  return acc + item;
}, 0);
console.log("final result", result);
const adminPaths2 = [
  { name: "Dashboard", path: "/admin/dashboard", element: "ADMIN_DASHBOARD" },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];
const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: item.path,
        element: item.element,
      });
    });
  }

  return acc;
}, []);
console.log(newArray);
// function checkName(name) {
//   const Name = name;
//   console.log(Name);
//   const SalmanSonName = name.split("");
//   console.log(SalmanSonName);
//   const lowercase = SalmanSonName.map(item => item.toLowerCase());
//   console.log(lowercase);
//   const runMap = lowercase.map((item) => item);
//   console.log(runMap);

//   if (
//     runMap[5] === "a" ||
//     runMap[5] === "y" ||
//     runMap[5] === "e" ||
//     runMap[5] === "o" ||
//     runMap[5] === "u" ||
//     runMap[5] === "w"
//   ) {
//     console.log("good name");
//   } else {
//     console.log("bad name");
//   }
// }

// checkName("shaHina");

