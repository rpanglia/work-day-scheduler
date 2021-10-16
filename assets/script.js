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

    $(".saveBtn").on("click")









}
)


// saving tasks in localStorage (will need to be added within the function?)
$("#hour9 .description").val(localStorage.getItem("hour9"));
