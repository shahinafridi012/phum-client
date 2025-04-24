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

// function monthlySavings(totalIncome, livingCost) {
//   const upTo = 3000;

//   if (
//     totalIncome[0] >= upTo ||
//     totalIncome[1] >= upTo ||
//     totalIncome[2] >= upTo
//   ) {
//     const incomeTax = totalIncome[(0, 1, 2)] * 0.2; // 20% tax
//     const afterTaxIncome = totalIncome[(0, 1, 2)] - incomeTax;

//     console.log("Tax:", incomeTax);
//     console.log("Income after tax:", afterTaxIncome);

//     const Savings = afterTaxIncome - livingCost;
//     if (Savings < 0) {
//       console.log("earn more");
//     }   m   
//     const monthlyTotalIncome =
//       totalIncome[0] + totalIncome[1] + totalIncome[2] - livingCost;
//     console.log(monthlyTotalIncome);
//   }
// }

// monthlySavings( [900, 2700, 3400],100);


