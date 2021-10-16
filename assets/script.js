// Declare Variables
//Current day at top of page
//moment().format('MMMM Do YYYY, h:mm:ss a');

var currentDay = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().hour();
var currentHour = moment().format("HH");
var currentHourInt = parseInt(currentHour)
var saveBtn = $(".saveBtn");

// $("#currentDay").html()


//Function to start jQuery
$(document).ready(function () {

    $(".saveBtn").on("click"), function () {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, textInput);
    }

})




// saving tasks in localStorage (will need to be added within the function?)
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
