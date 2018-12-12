const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log(ehDivisivelPorDois(10));
console.log(ehDivisivelPorDois(5));
console.log(ehDivisivelPorDois(12));