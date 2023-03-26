class CalcController {
    
    constructor(){
        // Atributos: Public, Protected, Private
        //this._displayCalc = 0 -> Private

        this._displayCalc = "0"
        this._currentDate
        this.initialize()
    }


    initialize(){

        var textDisplay = document.querySelector("#display-text")
        var displayHour = document.querySelector("#hour")
        var displayDate = document.querySelector("#date")

        textDisplay.innerHTML = "485"
        displayHour.innerHTML = "18:37"
        displayDate.innerHTML = "26/03/2023"
    }

    get displayCalc(){
        return this._displayCalc
    }

    set displayCalc(valor){
        this._displayCalc = valor
    }

    get currentDate(){
        return this._currentDate
    }

    set currentDate(valor){
        this._currentDate = valor
    }
}