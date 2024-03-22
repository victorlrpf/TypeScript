// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Victor'];
const dadosCliente2: [number, string, string] = [1, 'Victor', 'Luis'];
const dadosCliente3: [number, string, string?] = [1, 'Victor'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Victor', 'Luis'];

// A tupla pode ser mudada contanto que o valor seja d mesmo tipo
// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Victor', 'Otávio'];
const array2: ReadonlyArray<string> = ['Victor', 'Otávio'];

console.log(array1);
console.log(array2);

// Module mode
export default 1;
