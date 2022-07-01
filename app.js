const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const joke = document.querySelector("#joke");

setInterval( () => {

    let date = new Date();

    //set time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    

    //set date
    let days = date.getDate();
    let months = date.getMonth();

        switch(months) {
            case 0: 
                months = "Jan"
            break;
            case 1: 
                months = "Feb"
            break;
            case 2: 
                months = "Mar"
            break;
            case 3: 
                months = "Apr"
            break;
            case 4: 
                months = "May"
            break;
            case 5: 
                months = "Jun"
            break;
            case 6: 
                months = "Jul"
            break;
            case 7: 
                months = "Aug"
            break;
            case 8: 
                months =  "Sep"
            break;
            case 9: 
                months = "Oct"
            break;
            case 10: 
                months = "Nov"
            break;
            case 11: 
                months = "Dec"
            break;
        }

    let years = date.getFullYear();


    //print time
    if(hours < 10){
        hours = "0"+hours;
        hour.innerHTML = hours
    } else {
        hour.innerHTML = hours;
    }

    if(minutes < 10){
        minutes = "0"+minutes;
        minute.innerHTML = minutes;
    } else {
        minute.innerHTML = minutes;
    }

    if(seconds < 10){
        seconds = "0"+seconds;
        second.innerHTML = seconds;
    } else {
        second.innerHTML = seconds;
    }

    //print date
    day.innerHTML = days;
    month.innerHTML = months;
    year.innerHTML = years;


    //text in document title
    document.title = hours + " : " + minutes + " : " + seconds + " - Aktualny czas";

}, 1000);
