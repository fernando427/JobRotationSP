var faturamentos = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

let maiorValor = Number.MIN_VALUE;
let menorValor = Number.MAX_VALUE;
let media = 0;
let cont = 0;
let diaMaior = 0;
let diaMenor = 0;
let diaMedia = 0;

faturamentos.forEach(({valor} = faturamentos) => {
    if(valor !== 0) {
        media += valor;
        cont++;
    }
})

media /= cont;
console.log("A média mensal foi de: " + media);

faturamentos.forEach(({valor, dia} = faturamentos) => {
    if(valor !== 0) {
        if(valor > maiorValor) {
            maiorValor = valor;
            diaMaior = dia;
        } if(valor < menorValor) {
            menorValor = valor;
            diaMenor = dia;
        } if(valor > media) {
            diaMedia++;
        }
    }
})

console.log("O maior valor faturado foi de: " + maiorValor);
console.log("O menor valor faturado foi de: " + menorValor);
console.log("O número de dias com o valor faturado maior que a média mensal foi de: " + diaMedia);