let vitorias = 100;
let derrotas = 40;
let saldoVitorias = (vitorias - derrotas);

function rankingDeVitorias (saldoVitorias){
    if (saldoVitorias <= 10){
        return "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20){
        return "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50){
        return "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80){
        return "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90){
        return "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100){
        return "Lendário";
    } else{
        return "Imortal";
    }
}

const ranking = rankingDeVitorias(saldoVitorias);
console.log(`O Herói tem ${saldoVitorias} vitórias e está no nível de ${ranking}`);