var eventsData;
var timeDisplayEl = document.querySelector("#time-display");
timeDisplayEl.textContent = moment().format('MMMM Do YYYY')


function setHourColors() {
    var now = dayjs();
    for (var i = 8; i < 18; i++) {
       if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
       } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present");    
       }
       else if (i > now.hour()) {
        $("#hour-" + i + " textarea").addClass("future");
       }  
    }
}

function loadStoredData() {
    eventsData= JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour8: "",
            hour9: "",
            hour10: "",
            hour11: "",
            hour12: "",
            hour13: "",
            hour14: "",
            hour15: "",
            hour16: "",
            hour17: "",
        }
    }
}

function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventsData["hour" + hour] = value;

    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$('.saveBtn').on('click', handleSaveClick);
$(function() {
    loadStoredData();
    setHourColors();
});
