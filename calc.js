var bntC = document.querySelector('.bnt-c')
var textDisplay = document.querySelector("#display-text")
var displayHour = document.querySelector("#hour")
var displayDate = document.querySelector("#date")
var date = new Date()
var hour = date.getHours()
var min = date.getMinutes()
var day = date.getDate()
var month = date.getMonth()
var year = date.getFullYear()



function apagar(){
    
    textDisplay.innerHTML = 0
}


function showHour(){
    if(month == 2){
        month = 03
    }
    displayHour.innerHTML = `${hour}:${min}`
    displayDate.innerHTML = `${day}/${month}/${year}`
    
}
