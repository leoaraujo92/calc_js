class CalcController {
    
    constructor(){
        // O CONSTRUCTOR INICIALIZA O CÓDIGO AUTOMATICAMENTE
        // Atributos: Public, Protected, Private
        //this._displayCalc = 0 -> PRIVATE PORCAUSA DO UNDER-LINE
        this._operation = []
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display-text")
        this._dateEl = document.querySelector("#date")
        this._timeEl = document.querySelector("#hour")
        this._currentDate
        this.initialize()
        this.initButtonsEvents()
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


    /* ---------------------------------------------EVENTO DE CLICK-------------------------------------------
    //EVENTO DE CLICK 
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#base > div#list-1 > input, div#list-2 > input, div#list-3 > input, div#list-4 > input, div#list-5 > input")

        console.log(buttons)

        buttons.addEventListener('click', e=>{
            console.log(e)
        })

        buttons.forEach((btn, index)=>{

            btn.addEventListener('click', e => {

                console.log(btn.className.replace("bnt-",""))
            })
        })
    }-----------------------------------------------FIM EVENTO CLICK--------------------------------------------*/



    /*---------------------------------------------CRIANDO UMA MÉTODO DE EVENTLISTENER---------------------------*/
    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);
        })

    }
    /**-----------------------------------------------FIM LISTA DE EVENTOS-----------------------------------------*/

    /**METODO QUE LIMPA TUDO O QUE ESTA NO DISPLAY */
    clearAll(){

        this.displayCalc = '0'
    }

    /**METODO QUE ADCIONA UMA OPERAÇÃO */
    addOperation(value){

        this._operation.push(value)

        console.log(this._operation)
    }

    /**METODO QUE MOSTRA ERRO NA TELA */
    setError(){
        this.displayCalc = "ERRO"
    }

    /**ESTE METODO FAZ AS OPERAÇÕES NA CALCULADORA */

        execBtn(value){
            
            switch (value){

                case 'c':
                    this.clearAll()
                    break

                case 'div':
                    
                    break

                case 'minus':
                    
                    break

                case 'dot':
                    
                    break

                case 'plus':
                    
                    break

                case 'equal':
                    
                    break

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value))
                    break

                default:
                    this.setError()
                break
            }
        }

    /**
     * initButtonsEvents usa o addEventListernerAll para criar multiplos eventos
     * Que neste caso é o evento de click e drag
     */
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#base > div#list-1 > input, div#list-2 > input, div#list-3 > input, div#list-4 > input, div#list-5 > input")

        console.log(buttons)

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                console.log(btn.className.replace("bnt-",""))

                // CRIANDO UM METODO PARA FAZER AS OPERAÇÕES DA CALCULADORA
                this.execBtn(textBtn)

            })

    /**---------------------------------------------MUDANDO O CURSOR DO MOUSE VIA JS---------------------------------- */
    /**
     * Criei este método com css, porém é possivel e muito menos trabalhoso criar para varios elementos com JavaScript
     * Usuando o método addEventListenerAll criando acima
     */
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

                btn.style.cursor = "pointer"
            })

        })
    }


            //CRIANDO METODO PARA RETIRAR O ATRASO DO CARREGAMENTO DA DATA E HORA NO DISPLAY
            setDisplayDateTime(){
            
                this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
                    day: "2-digit",
                    month: "short",
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