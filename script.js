// Declare Variables

var currentDay = moment().format('dddd, MMMM Do YYYY');
var currentTime = moment().hour();
// var currentHour = moment().format("HH");
// var currentHourInt = parseInt(currentHour)
// var saveBtn = $(".saveBtn");
// $("#currentDay").html(currentDay);



//show date AND time in header at top
$("#currentDay").append();
function addDate() {
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
}
setInterval(addDate, 1000);



//Function to start jQuery
$(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    $(".time-block").each(function() {
        var sectionTime = parseInt($(this).attr("id").split("hour")[1]);
        console.log(sectionTime, currentTime);
        //below code changes the color of the sections as per time class
        if (sectionTime < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (sectionTime === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present"); 
            $(this).addClass("future");
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


})

