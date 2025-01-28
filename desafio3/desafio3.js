// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, 
// que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

// Função para consumir os dados do arquivo JSON
function consumirFaturamento() {
  // Ler o arquivo JSON
  fs.readFile('faturamentoMensal.json', 'utf8', (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
    }

    //convertendo os valores json para um objeto JavaScript
    const faturamentoMensal = JSON.parse(data);

    // Filtrando os valores que são igual a 0
    const faturamentoValidos = faturamentoMensal.filter(aux => aux.faturamento > 0);

    //Obtendo o faturamento total do mês
    const faturamentoTotal = faturamentoValidos.reduce((total, aux) => total + aux.faturamento, 0);

    //Obtendo a média do mês
    const mediaMensal = faturamentoTotal / faturamentoValidos.length;

    // Obtendo os dias que o faturamento foi acima da média
    const diasAcimaDaMedia = faturamentoValidos.filter(aux => aux.faturamento > mediaMensal).length;

    // Obtendo o dia com Maior faturamento no mês
    const maiorDia = faturamentoValidos.reduce((max, aux) => aux.faturamento > max.faturamento ? aux : max);

        // Obtendo o dia com menor faturamento no mês
    const menorDia = faturamentoValidos.reduce((min, aux) => aux.faturamento < min.faturamento ? aux : min);

    console.log(`Maior Faturamento: Dia ${maiorDia.dia} com R$${maiorDia.faturamento}`);
    console.log(`Menor Faturamento: Dia ${menorDia.dia} com R$${menorDia.faturamento}`);
    console.log(`Número de dias acima da média: ${diasAcimaDaMedia}`);

  });
}

// Executar a função
consumirFaturamento();
