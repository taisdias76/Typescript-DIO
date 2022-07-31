//Como podemos rodar isso em um arquivo .ts sem causar erros?

let employee1: {code: number, name: string} = {
    code: 10,
    name: "Teste"
}

let employee2 = {
    code: 10,
    name: "Tais"
};

interface Employee {
    code: number,
    name: string
}

let employee3: Employee = {
    code: 200,
    name: "Maria"
}

employee1.code = 10;
employee1.name = "John";