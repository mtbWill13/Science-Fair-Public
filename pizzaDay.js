let currentDate = new Date()
let addButton = document.getElementById("addbtn")

const games = [
    {name: "Day 1", Date: new Date(2024, 0, 9, 11, 5), Description: "Pizza Day", endDate: new Date(2024, 0, 9, 11, 55)},
    {name: "Day 2", Date: new Date(2024, 0, 16, 11, 5), Description: "Pizza Day", endDate: new Date(2024, 0, 16, 11, 55)},
    {name: "Day 3", Date: new Date(2024, 0, 23, 11, 5), Description: "Pizza Day", endDate: new Date(2024, 0, 23, 11, 55)},
    {name: "Day 4", Date: new Date(2024, 0, 30, 11, 5), Description: "Pizza Day", endDate: new Date(2024, 0, 30, 11, 55)}
]
let volleyballContainer = document.getElementById("volleyballContainer")
let addbtn = document.getElementById("addbtn")
let btnClicked

    
    addbtn.classList.add("add-to-calender")
    addbtn.addEventListener("click", function() {
        if (btnClicked === true) {
            addbtn.classList.add("greybutton")
        }else {
            addbtn.classList.add("add-to-calender")
        }
    })


for (let i = 0; i < games.length; i ++) {
    let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "vBallGameDiv")


        let newH1 = document.createElement("h1");
        newH1.textContent = games[i].name;
        newH1.setAttribute("class", "game-title")

        let gameDate = document.createElement("h2")
        gameDate.textContent = "Date: " + games[i].Date.toLocaleString()
        gameDate.setAttribute("class", "game-date")


        let newP = document.createElement("p")
        newP.textContent = "Details: " + games[i].Description
        newP.setAttribute("class", "game-details")

        let addToAppleCalendar = document.createElement("button")
        addToAppleCalendar.textContent = "Add to Apple Calender"
        addToAppleCalendar.setAttribute("class", "add-to-calender")
        addToAppleCalendar.setAttribute("id", "button" + i)

        newDiv.appendChild(newH1);
        newDiv.appendChild(gameDate);
        newDiv.appendChild(newP);
        newDiv.appendChild(addToAppleCalendar)
        
        volleyballContainer.appendChild(newDiv)
}

function add() {
    console.log(addButton)
    addButton.classList.add("greybutton")
    addButton.textContent = "Remove from Schedule"
    addButton.onclick = "remove"
    btnClicked = true;
    console.log(btnClicked)
    fullClick = true
    for(i = 0; i < games.length; i++){
        if (games[i].Date.getDate() < currentDate.getDate() + 10 && games[i].Date.getDate() >= currentDate.getDate()){
            console.log("less: " + games[i].name)
            localStorage.setItem("pizzaDay", "Pizza Day: " + games[i].name);
            localStorage.setItem("pizzaDayDetails", games[i].Description)
            localStorage.setItem("pizzaDayDate", games[i].Date.toLocaleString())
        }
        else{
            console.log("no")
        }
    }
}


function remove() {
    let addButton = document.getElementById("addbtn")
    console.log(addButton)
    addButton.classList.remove("greybutton")
    addButton.classList.add("add-to-calender")
    addButton.textContent = "Add to Schedule"
    addButton.onclick = "add"
    btnClicked = false;
    console.log(btnClicked)
    localStorage.setItem("volleyball", true);
    localStorage.removeItem("volleyball")
}

let print = document.getElementById("print").addEventListener("click", function() {
    console.log("print")
    window.print()
})



function addToAppleCalendar(eventName, eventDescription, eventLocation, startDate, endDate) {
    // Create a string containing the iCalendar data
    let icsContent = "BEGIN:VCALENDAR\n" +
        "VERSION:2.0\n" +
        "BEGIN:VEVENT\n" +
        "SUMMARY:" + eventName + "\n" +
        "DESCRIPTION:" + eventDescription + "\n" +
        "LOCATION:" + eventLocation + "\n" +
        "DTSTART:" + startDate + "\n" +
        "DTEND:" + endDate + "\n" +
        "END:VEVENT\n" +
        "END:VCALENDAR";

    // Encode the string to make it safe for URLs
    let encodedData = encodeURIComponent(icsContent);

    // Create a data URI
    let dataUri = 'data:text/calendar;charset=utf-8,' + encodedData;

    // Create a link element
    let link = document.createElement('a');
    link.href = dataUri;
    link.setAttribute('download', 'event.ics');
    link.click();
}


document.getElementById("button0").addEventListener("click", function() {
        addToAppleCalendar(
            games[0].name,
            games[0].Description,
            games[0].Description,
            formatDate(games[0].Date), // Start date
            formatDate(games[0].endDate)  // End date
        );
});

document.getElementById("button1").addEventListener("click", function() {
    addToAppleCalendar(
        games[1].name,
        games[1].Description,
        games[1].Description,
        formatDate(games[1].Date), // Start date
        formatDate(games[1].endDate)  // End date
    );
});

document.getElementById("button2").addEventListener("click", function() {
    addToAppleCalendar(
        games[2].name,
        games[2].Description,
        games[2].Description,
        formatDate(games[2].Date), // Start date
        formatDate(games[2].endDate)  // End date
    );
});

document.getElementById("button3").addEventListener("click", function() {
    addToAppleCalendar(
        games[3].name,
        games[3].Description,
        games[3].Description,
        formatDate(games[3].Date), // Start date
        formatDate(games[3].endDate)  // End date
    );
});

document.getElementById("button4").addEventListener("click", function() {
    addToAppleCalendar(
        games[4].name,
        games[4].Description,
        games[4].Description,
        formatDate(games[4].Date), // Start date
        formatDate(games[4].endDate)  // End date
    );
});

document.getElementById("button5").addEventListener("click", function() {
    addToAppleCalendar(
        games[5].name,
        games[5].Description,
        games[5].Description,
        formatDate(games[5].Date), // Start date
        formatDate(games[5].endDate)  // End date
    );
});

document.getElementById("button6").addEventListener("click", function() {
    addToAppleCalendar(
        games[6].name,
        games[6].Description,
        games[6].Description,
        formatDate(games[6].Date), // Start date
        formatDate(games[6].endDate)  // End date
    );
});

function formatDate(date) {
    // Format the date as YYYYMMDDTHHMMSSZ (in UTC)
    let year = date.getUTCFullYear();
    let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    let day = date.getUTCDate().toString().padStart(2, '0');
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
}
