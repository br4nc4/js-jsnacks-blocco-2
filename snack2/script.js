const listNomi = ["Giuseppe", "Davide", "Francesco", "Anna", "Giampiero", "Fabio"];
const listCognomi = ["Brancaleon", "Losciale", "Milanesi", "Brambilla", "Bernazzani", "Taffari"];
const listaCompleta = ["", "", "", "", "", ""];


for (let i = 0; i < listaCompleta.length; i++){  

    let randomNomi = Math.floor(Math.random()*listNomi.length);
    //console.log(listNomi[randomNomi]);

    let randomCognomi = Math.floor(Math.random()*listCognomi.length);
    //console.log(listCognomi[randomCognomi]);

    console.log(listNomi[randomNomi] + " " + listCognomi[randomCognomi])
}

