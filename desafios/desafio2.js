"use strict";
//Resposta
//1º criar um enum de profissoes
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
// Como podemos melhorar o esse código usando TS? 
let pessoa1 = {
    nome: "Pessoa 1",
    idade: 29,
    profissao: Profissao.Atriz
};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
let pessoa2 = {
    nome: "Roberta",
    idade: 18,
    profissao: Profissao.Padeiro
};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
