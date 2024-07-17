const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 100000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Funko pop",
    unitPrice: 50000,
    amount: 3,
    totalPrice: 150000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Watch",
    unitPrice: 300000,
    amount: 4,
    totalPrice: 1200000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Jordan 1",
    unitPrice: 500000,
    amount: 3,
    totalPrice: 1500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Bycicle playing card",
    unitPrice: 40000,
    amount: 20,
    totalPrice: 800000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Forza horizon 5",
    unitPrice: 200000,
    amount: 20,
    totalPrice: 4000000,
    casherId: 1,
    date: "2022-11-01",
  },
];

const kb1 = data.map((name) => {
  return `
    <div>
        ${name.productName} = ${name.amount}
    </div>
    `;
});
console.log("kb1: ", kb1);

const bet1 = data.filter((val) => val.amount > 10 && val.totalPrice > 1000000);
console.log("bet1: ", bet1);

//
const data2 = [1, 2, 3, 4, 5];

const kb2 = data2.map((val) => val * val);
console.log("kb2: ", kb2);

const bet2 = data2.filter((val) => val > 2);
console.log("bet2: ", bet2);

const total2 = data2.reduce((pV, cV) => pV + cV, 0);
console.log("total2: ", total2);
