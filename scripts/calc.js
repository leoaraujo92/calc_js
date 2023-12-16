window.calc = new CalcController() // CHAMANDO CONSUTRUCTOR DA CLASSE CalcController

var bntC = document.querySelector('.bnt-c')
var textDisplay = document.querySelector("#display-text")
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var day = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()



/*
function showHour(){
   
    switch(month){
        case 0: 
            month = "Jan"
            break
        case 1: 
            month = "Fev"
            break
        case 2: 
            month = "Mar"
            break
        case 3:
            month = "Abr"
            break
        case 3:
            month = "Abr"
            break
        case 4:
            month = "Mai"
            break
        case 5:
            month = "Jun"
            break
        case 6:
            month = "Jul"
            break
        case 7:
            month = "Ago"
            break
        case 8:
            month = "Set"
            break
        case 9:
            month = "Out"
            break
        case 10:
            month = "Nov"
            break
        case 11:
            month = "Dez"
            break
        }
    displayTime.innerHTML = `${hour}:${min}`
    displayDate.innerHTML = `${day}/${month}/${year}`
    
}
*/