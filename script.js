// const makeChange = (c) => {
//   // your name here
// };

// // Do not the change the code below
// const c = prompt("Enter c: ");
// // alert(JSON.stringify(makeChange(c)));



const makeChange = (c) => {
  c = parseInt(c); // ensure input is an integer

  const result = {
    q: Math.floor(c / 25),
    d: Math.floor((c % 25) / 10),
    n: Math.floor((c % 25 % 10) / 5),
    p: c % 5
  };

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));