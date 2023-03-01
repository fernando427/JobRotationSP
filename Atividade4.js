SP = 67.83643
RJ = 36.67866
MG = 29.22988
ES = 27.16548
Out = 19.84953

total = (SP + RJ + MG + ES + Out)

psp = ((SP/total)*100)
prj = ((RJ/total)*100)
pmg = ((MG/total)*100)
pes = ((ES/total)*100)
pout = ((Out/total)*100)

console.log('Valor em porcentagem para SP: ' + psp.toFixed(2) + '%')
console.log('Valor em porcentagem para RJ: ' + prj.toFixed(2) + '%')
console.log('Valor em porcentagem para MG: ' + pmg.toFixed(2) + '%')
console.log('Valor em porcentagem para ES: ' + pes.toFixed(2) + '%')
console.log('Valor em porcentagem para Outros: ' + pout.toFixed(2) + '%')