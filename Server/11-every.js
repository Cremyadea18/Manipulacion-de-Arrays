    
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 19,
  },
];


const allowtoEnter = team.every (member => member.age > 18)

console.log(allowtoEnter);