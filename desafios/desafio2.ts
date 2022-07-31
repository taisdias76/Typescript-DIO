//Resposta
//1º criar um enum de profissoes
enum Profissao{
    Atriz,
    Padeiro
}

//2º interface pessoa
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

// Como podemos melhorar o esse código usando TS? 

let pessoa1:Pessoa = {
    nome: "Pessoa 1",
    idade: 29,
    profissao: Profissao.Atriz
};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;

let pessoa2:Pessoa = {
    nome: "Roberta",
    idade: 18,
    profissao: Profissao.Padeiro
}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4:Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}