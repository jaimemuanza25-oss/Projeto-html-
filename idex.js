// ===============================
// 3º TRIMESTRE - JAVASCRIPT
// Sistema completo (T1 a T5)
// ===============================

let opcao = prompt(
`Escolha o módulo:
1 - Sistema de Alunos
2 - Calculadora
3 - Média Simples
4 - Console de Aluno
5 - Sistema com Funções`
);

// ===============================
// T1 - SISTEMA DE ALUNOS
// ===============================
if (opcao === "1") {

    let alunos = [];
    let continuar = "sim";

    while (continuar.toLowerCase() === "sim") {

        let nome = prompt("Nome do aluno:");
        let n1 = Number(prompt("Nota 1:"));
        let n2 = Number(prompt("Nota 2:"));
        let n3 = Number(prompt("Nota 3:"));

        let media = (n1 + n2 + n3) / 3;
        let situacao = media >= 10 ? "Aprovado" : "Reprovado";

        alunos.push({
            Nome: nome,
            Nota1: n1,
            Nota2: n2,
            Nota3: n3,
            Media: media.toFixed(2),
            Situacao: situacao
        });

        continuar = prompt("Adicionar outro aluno? (sim/não)");
    }

    console.table(alunos);
}

// ===============================
// T2 - CALCULADORA
// ===============================
else if (opcao === "2") {

    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let op = prompt("Operação (+, -, *, /)");

    let resultado;

    switch (op) {
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Erro divisão por zero";
            break;

        default:
            resultado = "Operação inválida";
    }

    alert("Resultado: " + resultado);
    console.log(resultado);
}

// ===============================
// T3 - MÉDIA SIMPLES
// ===============================
else if (opcao === "3") {

    let n1 = Number(prompt("Nota 1:"));
    let n2 = Number(prompt("Nota 2:"));
    let n3 = Number(prompt("Nota 3:"));

    let media = (n1 + n2 + n3) / 3;

    if (isNaN(media)) {
        alert("Valores inválidos!");
    } else {
        alert("Média final: " + media.toFixed(2));
    }
}

// ===============================
// T4 - CONSOLE DE ALUNO
// ===============================
else if (opcao === "4") {

    let nome = prompt("Nome do aluno:");
    let n1 = Number(prompt("Nota 1"));
    let n2 = Number(prompt("Nota 2"));
    let n3 = Number(prompt("Nota 3"));

    let media = (n1 + n2 + n3) / 3;
    let situacao = media >= 10 ? "Aprovado" : "Reprovado";

    let aluno = {
        Nome: nome,
        Nota1: n1,
        Nota2: n2,
        Nota3: n3,
        Media: media.toFixed(2),
        Situacao: situacao
    };

    console.table([aluno]);
}

// ===============================
// T5 - FUNÇÕES REUTILIZÁVEIS
// ===============================
else if (opcao === "5") {

    function calcularMedia(n1, n2, n3) {
        return (n1 + n2 + n3) / 3;
    }

    function situacao(media) {
        return media >= 10 ? "Aprovado" : "Reprovado";
    }

    let nome = prompt("Nome:");
    let n1 = Number(prompt("Nota 1"));
    let n2 = Number(prompt("Nota 2"));
    let n3 = Number(prompt("Nota 3"));

    let media = calcularMedia(n1, n2, n3);

    console.log({
        Nome: nome,
        Media: media.toFixed(2),
        Situacao: situacao(media)
    });
}

// ===============================
// OPÇÃO INVÁLIDA
// ===============================
else {
    alert("Opção inválida!");
}