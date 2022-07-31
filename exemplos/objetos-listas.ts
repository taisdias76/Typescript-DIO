const pessoa = {
    nome: "Tais",
    idade: 23,
    profissaoTeste: "Desenvolvedora"
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissaoTeste:string} = {
    nome: "Andre",
    idade: 25,
    profissaoTeste: "Pintor"
}

// Melhorar criando uma interface Pessoa e um enum de profissões

enum ProfissaoTeste{
    Professora,
    Desenvolvedora,
    Pintor
}

interface PessoaTeste {
    nome: string,
    idade: number,
    //tornando a profissão uma propriedade não obrigatória
    profissaoTeste?: ProfissaoTeste,
}

const vanessa: PessoaTeste = {
    nome: 'Vanessa',
    idade: 23,
    profissaoTeste: ProfissaoTeste.Professora
}

interface Estudante extends PessoaTeste {
    materias: string[];
}

const tais: Estudante = {
    nome: 'Tais',
    idade: 23,
    profissaoTeste: ProfissaoTeste.Desenvolvedora,
    materias: ['Matemática', 'Programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(tais.materias);