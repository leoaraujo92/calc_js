class CalcController {
    
    constructor(){
        // Atributos: Public, Protected, Private
        //this._displayCalc = 0 -> Private
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display-text")
        this._dateEl = document.querySelector("#date")
        this._timeEl = document.querySelector("#hour")
        this._currentDate
        this.initialize()
    }

    //Inicializando o código
    initialize(){

        
        // Definindo um intervalo
        //Arrow Function recurso para criação de função
        // Hora e data sendo atualiza a cada 1000 milisegundos que é igual a 1 segundo

        //A FUNÇÃO setDisplayDateTime está antes função setInterval para não ter delay quanto carregar na tela
        this.setDisplayDateTime()

        let interval = setInterval(()=>{

            this.setDisplayDateTime()

        },1000 )
        //FIM setInterval data e hora


        //setTimeOut determina quanto tempo esperar para que o evento deva ocorrer
        
        /*setTimeOut(()=>{

            clearInterval(interval) => anula o setInterval criado acima após 10 segundos
            
        }, 10000)
        
        
        */



    }
    // FIM DA FUNÇÃO INITIALIZE

            //CRIANDO METODO PARA RETIRAR O ATRASO DO CARREGAMENTO DA DATA E HORA NO DISPLAY
            setDisplayDateTime(){
            
                this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                    day: "2-digit",
                    month: "long",
                    year: "numeric"
                })
                this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
            }

    //CONFIGURAÇÃO DA HORA
    get displayTime(){
        this._timeEl.innerHTML
    }

    set displayTime(value){
        this._timeEl.innerHTML = value
    }
    //FIM CONFIGURAÇÃO DA HORA

    //CONFIGURAÇÃO DA DATA
    get displayDate(){
        this._dateEl.innerHTML
    }

    set displayDate(value){
        this._dateEl.innerHTML = value
    }
    //FIM CONFIGURAÇÃO DA DATA

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value
    }

    get currentDate(){
        return new Date()
    }

    set currentDate(value){
        this._currentDate = value
    }
}