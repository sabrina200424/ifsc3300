"use strict";

class Event {
    constructor(name, dateString) {
        this.name = name;
        this.dateString = dateString;
        this.date = new Date(dateString);
    }

    get days() {
        const today = new Date();
        const oneDayMS = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
        let days = ( this.date.getTime() - today.getTime() ) / oneDayMS;
        days = Math.ceil(days);
        return days;
    }

    // -4 and other number parts converted to val 

    getCountdownMessage() {
        
        if (this.days === 0) {  //timing for today
            return "Hooray! Today is ".concat(this.name, 
                "!\n(", this.date.toDateString(), ")");
        }
        else if (this.days < 0) { // timing for the past events
            let name = this.name.substring(0,1).toUpperCase() + this.name.substring(1); 
            return name.concat(" happened ", Math.abs(this.days), 
                " day(s) ago. \n (", this.date.toDateString(), ")"); 
        }
        else {  // timing for future events
            return this.days.toString().concat(" day(s) until ", 
                this.name, "!\n(", this.date.toDateString(), ")");
        }
    }    
}