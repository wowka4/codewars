const users = [
  { name: "Igor", amount: 19 },
  { name: "Danil", amount: 1 },
  { name: "Ivan", amount: 4 },
  { name: "Matvey", amount: 16 },
];

const sum = users.reduce((acc, user) => {
    return acc += user.amount
}, 0)

console.log(sum)