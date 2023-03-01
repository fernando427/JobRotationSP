let SP = 67836.43
let RJ = 36678.66
let MG = 29229.88
let ES = 27165.48
let Out = 19849.53

let total = (SP + RJ + MG + ES + Out)

let psp = ((SP/total)*100)
let prj = ((RJ/total)*100)
let pmg = ((MG/total)*100)
let pes = ((ES/total)*100)
let pout = ((Out/total)*100)

console.log('Valor em porcentagem para SP: ' + psp.toFixed(2) + '%')
console.log('Valor em porcentagem para RJ: ' + prj.toFixed(2) + '%')
console.log('Valor em porcentagem para MG: ' + pmg.toFixed(2) + '%')
console.log('Valor em porcentagem para ES: ' + pes.toFixed(2) + '%')
console.log('Valor em porcentagem para Outros: ' + pout.toFixed(2) + '%')