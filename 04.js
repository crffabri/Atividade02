let peso = parseFloat (prompt(`Digite seu peso:`));
let altura = parseFloat (prompt(`Digite sua altura:`));
let imc = peso / (altura * altura);

if (imc >= 18.5 && imc < 24.9) {
    alert (`Você esta saudavel!`)
}

else {
    alert (` Você não está saudavel!`);
}