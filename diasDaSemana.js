function apresentar(){
    var dia = window.document.getElementById("dia")
    var res = window.document.getElementById("res")
    var mos = Number(dia.value)
    switch (mos){
        case 1:
            res.innerHTML = ` Hoje é domingo. Bom descanso!`
            break
        case 2:
            res.innerHTML = `Hoje é segunda-feira. Bom trabalho!`
            break
        case 3:
            res.innerHTML = `Hoje é terça-feira!`
            break   
        case 4: 
            res.innerHTML = `Hoje é quarta-feira!`
            break 
        case 5: 
            res.innerHTML = `Hoje é quinta-feira!`
            break
        case 6: 
            res.innerHTML = `Hoje é sexta-feira! Bom final de semana!!!`
            break
         case 7: 
            res.innerHTML = `Hoje é sábado!`
            break
        default:
            res.innerHTML = `Dia inválido.`
            break            
    }
}