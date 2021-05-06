class timer {

    constructor () {
        this._locale = "pt-BR"
        this._timeEl = document.querySelector("#timer-area")
        this._dateEl = document.querySelector("#date-area")
        this._currentTime
        this._displayTime
        this.inicial()
    }

    inicial() {
        console.log('teste')
        this.setDisplayTime()
    }

    setDisplayTime() {
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
        let ops = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, ops )

        setInterval(()=>{

            this.setDisplayTime();

        }, 1000);

        return this.displayTime
    }



    get currentDate () {
        return new Date()
    }

    set currentDate(value){

        this._currentDate = value;

    }



    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value) {

        this._timeEl.innerHTML = value
    }
    

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value
    }
}


let mytimer1 = new timer

//code at Matheus S