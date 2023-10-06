// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getDaysCaption(days) {
    if (days === 1) {
        return " день.";
    } else if (days === 2 || days === 3 || days === 4) {
        return " дня.";
    } else if (days === 5 || days === 6) {
        return " днів.";
    } else {
        return "[error]";
    }
    
}

function getNextSaturday(date = new Date()) {
    const dateCopy = new Date(date.getTime());

    const nextSaturday = new Date(
        dateCopy.setDate(
            dateCopy.getDate() + ((7 - dateCopy.getDay() + 6) % 7 || 7),
        ),
    );

    return nextSaturday;
}

window.addEventListener("load", function ()
{
    var days = (getNextSaturday().getTime() - (new Date()).getTime()) / (1000 * 60 * 60 * 24);
    document.querySelector("#daysLeftContainer").innerHTML = "До наступної субботи залишилося " + days + getDaysCaption(days);
})
