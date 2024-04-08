const now = new Date();            // get current date and time
const newYear = new Date(now);     // copy current date and time
newYear.setMonth(2);               // set month to January
newYear.setDate(24);                // set day to the 1st
newYear.setFullYear( newYear.getFullYear() + 1 );
 
// time in milliseconds
const timeLeft = newYear.getTime() - now.getTime();   
// milliseconds in a day: hrs * mins * secs * milliseconds
const msInOneDay = 24 * 60 * 60 * 1000;
// convert milliseconds to days
const daysLeft = Math.ceil( timeLeft / msInOneDay );
 
let message = "There ";
if (daysLeft == 1) {
    message += "is one day";
}
else {
    message += "are " + daysLeft + " days";
}
message += " left until the New Year.";

document.write(daysLeft)
// If today is November 3, 2020, message is
// "There are 59 days left until the New Year."


//how many milliseconds have been elapsed after you were born 
