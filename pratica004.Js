let agora = new Date()//Pegando a hora atual do sistema.
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora >= 0 && hora < 6){
    console.log('Boa Madrugada!')
}else if(hora < 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora < 18){
    console.log('Boa Tarde!')
} else if (hora <= 23){
    console.log('Boa Noite!')
}else{
    console.log('Hora informada não existi.')
}