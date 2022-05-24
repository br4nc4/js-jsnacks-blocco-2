let numeroInserito = [];

const inputNumero = prompt("Inserisci un numero");
numeroInserito.push(parseInt(inputNumero));
if (numeroInserito[0] % 2 === 0){
    alert(numeroInserito);
} else {
    alert(parseInt(numeroInserito[0]) + 1);
}