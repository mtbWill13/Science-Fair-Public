let currentDate = new Date()
let addButton = document.getElementById("addbtn")

const games = [
    {name: "Senior Girls Basketball: Game 1", Date: new Date(2024, 0, 10, 16, 30), Description: "VS. St. Bernadette at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 10, 17, 30), locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.068884124077!2d-79.9579268225876!3d43.27093267706898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84825152c5dd%3A0xa7ebe1c1743be176!2sSt.%20Augustine%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707339689076!5m2!1sen!2sca"},
    {name: "Senior Girls Basketball: Game 2", Date: new Date(2024, 0, 16, 16, 30), Description: "VS. St. Thomas the Apostle at St. Thomas the Apostle(170 Skinner Rd, Waterdown)", endDate: new Date(2024, 0, 16, 17, 30), locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.8158069909714!2d-79.87977092258585!3d43.33904327269088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9d7ef99e903b%3A0x6dbbc949dc6aef0!2sSt.%20Thomas%20the%20Apostle!5e0!3m2!1sen!2sca!4v1707339822704!5m2!1sen!2sca"},
    {name: "Senior Girls Basketball: Game 3", Date: new Date(2024, 0, 24, 16, 30), Description: "VS. Guardian Angels at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 24, 17, 30), locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.068884124077!2d-79.9579268225876!3d43.27093267706898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84825152c5dd%3A0xa7ebe1c1743be176!2sSt.%20Augustine%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707339689076!5m2!1sen!2sca"},
    {name: "Senior Girls Basketball: Game 4", Date: new Date(2024, 0, 31, 17, 30), Description: "VS. St. Ann Ancaster at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 31, 18, 30), locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.068884124077!2d-79.9579268225876!3d43.27093267706898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84825152c5dd%3A0xa7ebe1c1743be176!2sSt.%20Augustine%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707339689076!5m2!1sen!2sca"},
    {name: "Senior Girls Basketball: Game 5", Date: new Date(2024, 1, 7, 16, 30), Description: "VS. Immaculate Conception at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 1, 7, 17, 30), locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.068884124077!2d-79.9579268225876!3d43.27093267706898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84825152c5dd%3A0xa7ebe1c1743be176!2sSt.%20Augustine%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707339689076!5m2!1sen!2sca"}

]
let volleyballContainer = document.getElementById("volleyballContainer")
let addbtn = document.getElementById("addbtn")
let btnClicked

    
    addbtn.classList.add("add-to-calender2")
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

        let iframe = document.createElement("iframe")
        iframe.setAttribute("src", games[i].locationLink)
        iframe.setAttribute("width", "400")
        iframe.setAttribute("height", "300")
        iframe.setAttribute("style", "border: 1px solid black;")
        iframe.setAttribute("style", "border-radius: 10px;")

        let addToAppleCalendar = document.createElement("button")
        addToAppleCalendar.textContent = "Add to Apple Calender"
        addToAppleCalendar.setAttribute("class", "add-to-calender")
        addToAppleCalendar.setAttribute("id", "button" + i)

        newDiv.appendChild(newH1);
        newDiv.appendChild(gameDate);
        newDiv.appendChild(newP);
        newDiv.appendChild(iframe);
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
            localStorage.setItem("seniorBBall", games[i].name);
            localStorage.setItem("seniorBBallDetails", games[i].Description)
            localStorage.setItem("seniorBBallDate", games[i].Date.toLocaleString())
            localStorage.setItem("addedGirlsBball", "true")
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