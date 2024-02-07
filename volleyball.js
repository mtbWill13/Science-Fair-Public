let currentDate = new Date()
let addButton = document.getElementById("addbtn")

const games = [
{name: "Game 1", Date: new Date(2024, 0, 11, 17, 15), Description: "Vs. St. John Paul at: 600 Acadia Dr, Hamilton, ON", locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.3389075385035!2d-79.87069362491854!3d43.20238048147345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a615422a9b3%3A0x8554148bf3ff0754!2sSt.%20John%20Paul%20II%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707320320181!5m2!1sen!2sca"}, 
{name: "Game 2", Date: new Date(2024, 0, 16, 17, 15), endDate: new Date(2024, 0, 16, 18, 15), Description: "Vs. Our Lady of Mount Carmel at: 1624 Centre Rd, Carlisle, ON", locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.7154018769133!2d-79.99701872490567!3d43.40387756852231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b7c3bab45d9bb%3A0x11577c7532c49263!2sOur%20Lady%20of%20Mount%20Carmel%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707320430479!5m2!1sen!2sca"},
{name: "Game 3", Date: new Date(2024, 0, 23, 16, 15), endDate: new Date(2024, 0, 23, 17, 15), Description: "Vs. St. Vincent de Paul at: 295 Greencedar Dr, Hamilton, ON", locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.368383614311!2d-79.92511812491733!3d43.22273548016726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c852d8e79ec8f%3A0x15a3d7260e6f1de3!2sSt.%20Vincent%20De%20Paul%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707320511450!5m2!1sen!2sca"},
{name: "Game 4", Date: new Date(2024, 0, 31, 17, 15), Description: "Vs. Our Lady of Lourdes at: 420 Mohawk Rd E, Hamilton, ON", locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.3779452195417!2d-79.86030672491732!3d43.22253498018009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9a4c7e8088d5%3A0x7f9b6c844a27acaf!2sOur%20Lady%20of%20Lourdes%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707320583785!5m2!1sen!2sca"},
{name: "Game 5", Date: new Date(2024, 1, 6, 18, 45), Description: "Vs. St. Ann's Hamilton at: 15 Ann St, Hamilton, ON", locationLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.801359116039!2d-79.83816332491517!3d43.255584778058235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9bfb8e13fc9f%3A0x71bcbf36fe12079e!2sSt.%20Ann%20(Hamilton)%20Catholic%20Elementary%20School!5e0!3m2!1sen!2sca!4v1707320665332!5m2!1sen!2sca"}
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
        newDiv.appendChild(iframe)
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
            localStorage.setItem("volleyball", "Senior Boy's Volleyball: " + games[i].name);
            localStorage.setItem("volleyballDetails", games[i].Description)
            localStorage.setItem("volleyballDate", games[i].Date.toLocaleString())
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
    addButton.classList.add("add-to-calender2")
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



//Adding to