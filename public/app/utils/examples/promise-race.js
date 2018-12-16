
const p1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('promise 1 terminou'), 2000));

const p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject('cancelado'), 1000));

Promise.race([
    p1, p2
])
    .then(console.log)
    .catch(console.warn);
