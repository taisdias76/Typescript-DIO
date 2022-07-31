"use strict";
const pessoa = {
    nome: "Tais",
    idade: 23,
    profissaoTeste: "Desenvolvedora"
};
pessoa.idade = 29;
const andre = {
    nome: "Andre",
    idade: 25,
    profissaoTeste: "Pintor"
};
// Melhorar criando uma interface Pessoa e um enum de profissões
var ProfissaoTeste;
(function (ProfissaoTeste) {
    ProfissaoTeste[ProfissaoTeste["Professora"] = 0] = "Professora";
    ProfissaoTeste[ProfissaoTeste["Desenvolvedora"] = 1] = "Desenvolvedora";
    ProfissaoTeste[ProfissaoTeste["Pintor"] = 2] = "Pintor";
})(ProfissaoTeste || (ProfissaoTeste = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissaoTeste: ProfissaoTeste.Professora
};
const tais = {
    nome: 'Tais',
    idade: 23,
    profissaoTeste: ProfissaoTeste.Desenvolvedora,
    materias: ['Matemática', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(tais.materias);
