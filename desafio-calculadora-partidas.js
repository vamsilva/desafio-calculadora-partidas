// Função para calcular vitórias e derrotras
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Não identificado";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

// Função principal para exibir a mensagem
function exibirMensagem() {

    const vitorias = parseInt(prompt("Informe o número de vitórias:"));
    const derrotas = parseInt(prompt("Informe o número de derrotas:"));

    const resultado = calcularNivel(vitorias, derrotas);
    
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Exibir a mensagem principal
exibirMensagem();
