"use strict";
//any é um tipo que pode receber qualquer tipo
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
