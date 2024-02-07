const paDays = [
    {name: "Grade 8 St. Mary's Trip", date: new Date(2024, 0, 25, 10, 15)},
    {name:"PA Day", date: new Date(2024, 0, 26, 8, 20)},
    {name:"Science Fair", date: new Date(2024, 1, 6, 8, 20)},
    {name: "Jersey Day", date: new Date(2024, 1, 9, 8, 20)},
    {name: "Cake Raffle (Red & White Day", date: new Date(2024, 1, 13, 8, 20)},
    {name: "Ash Wednesday", date: new Date(2024, 1, 14, 8, 20)}
]
const gamesVolleyball = [
    {name: "Game 1", Date: new Date(2024, 0, 11, 17, 15), endDate: new Date(2024, 0, 11, 18, 15),Description: "Vs. St. John Paul at: 600 Acadia Dr, Hamilton, ON"},
    {name: "Game 2", Date: new Date(2024, 0, 16, 17, 15), endDate: new Date(2024, 0, 16, 18, 15), Description: "Vs. Our Lady of Mount Carmel at: 1624 Centre Rd, Carlisle, ON"},
    {name: "Game 3", Date: new Date(2024, 0, 23, 16, 15), endDate: new Date(2024, 0, 23, 17, 15), Description: "Vs. St. Vincent de Paul at: 295 Greencedar Dr, Hamilton, ON"},
    {name: "Game 4", Date: new Date(2024, 0, 31, 17, 15), endDate: new Date(2024, 0, 31, 18, 15), Description: "Vs. Our Lady of Lourdes at: 420 Mohawk Rd E, Hamilton, ON"},
    {name: "Game 5", Date: new Date(2024, 1, 6, 18, 45), endDate: new Date(2024, 1, 6, 19, 45), Description: "Vs. St. Ann's Hamilton at: 15 Saint Ann St, Hamilton, ON"}
    ]
const gamesGirlsBball = [
    {name: "Senior Girls Basketball: Game 1", Date: new Date(2024, 0, 10, 16, 30), Description: "VS. St. Bernadette at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 10, 17, 30)},
    {name: "Senior Girls Basketball: Game 2", Date: new Date(2024, 0, 16, 16, 30), Description: "VS. St. Thomas the Apostle at St. Thomas the Apostle(170 Skinner Rd, Waterdown)", endDate: new Date(2024, 0, 16, 17, 30)},        {name: "Senior Girls Basketball: Game 3", Date: new Date(2024, 0, 24, 16, 30), Description: "VS. Guardian Angels at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 24, 17, 30)},
    {name: "Senior Girls Basketball: Game 4", Date: new Date(2024, 0, 31, 17, 30), Description: "VS. St. Ann Ancaster at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 0, 31, 18, 30)},
    {name: "Senior Girls Basketball: Game 5", Date: new Date(2024, 1, 7, 16, 30), Description: "VS. Immaculate Conception at St. Augustine(25 Alma St, Dundas)", endDate: new Date(2024, 1, 7, 17, 30)}
    
]

if (!localStorage.getItem('alertShown')) {
    window.alert("This is just a prototipe so not all functions work correctly at the moment")
    localStorage.setItem('alertShown', 'true');
}
let currentDatePaDay = new Date()
let clickedHome
let umpcomingContainer = document.getElementById("upcoming-container")
let allContainer = document.getElementById("all-container")

let volleyball = localStorage.getItem("volleyball");
let volleyballDetails = localStorage.getItem("volleyballDetails")
let volleyballDate = localStorage.getItem("volleyballDate")
let addedVolleyball = localStorage.getItem("addedVolleyball")
console.log(addedVolleyball)
localStorage.removeItem("addedVolleyball")

let pizzaDay = localStorage.getItem("pizzaDay");
let pizzaDayDetails = localStorage.getItem("pizzaDayDetails")
let pizzaDayDate = localStorage.getItem("pizzaDayDate")

let seniorBBall = localStorage.getItem("seniorBBall")
let seniorBBallDetails = localStorage.getItem("seniorBBallDetails")
let seniorBBallDate = localStorage.getItem("seniorBBallDate")
let addedGirlsBball = localStorage.getItem("addedGirlsBball")


console.log(volleyballDate)
console.log(volleyballDetails)
console.log(volleyball)
console.log(paDays[0].name)
console.log(paDays[0].date.toLocaleString())
        



while (volleyball) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "vBallGameDiv")

    let newH1 = document.createElement("a");
    newH1.textContent = volleyball;
    newH1.setAttribute("href", "volleyball.html")
    newH1.setAttribute("class", "game-title")

    let newP = document.createElement("p")
    newP.textContent = volleyballDetails;
    newP.setAttribute("class", "game-details")

    let newDate = document.createElement("p")
    newDate.textContent = volleyballDate;
    newP.setAttribute("class", "game-details")

    newDiv.appendChild(newH1);
    newDiv.appendChild(newDate)
    newDiv.appendChild(newP);
    umpcomingContainer.appendChild(newDiv)

    localStorage.removeItem("volleyball")
}

if (pizzaDay) {
    let newPizzaDiv = document.createElement("div");
    newPizzaDiv.setAttribute("class", "vBallGameDiv")

    let newPizzaH1 = document.createElement("a");
    newPizzaH1.textContent = pizzaDay;
    newPizzaH1.setAttribute("href", "pizzaDay.html")
    newPizzaH1.setAttribute("class", "game-title")

    let newPizzaP = document.createElement("p")
    newPizzaP.textContent = pizzaDayDetails;
    newPizzaP.setAttribute("class", "game-details")

    let newPizzaDate = document.createElement("p")
    newPizzaDate.textContent = pizzaDayDate;
    newPizzaP.setAttribute("class", "game-details")

    newPizzaDiv.appendChild(newPizzaH1);
    newPizzaDiv.appendChild(newPizzaDate)
    newPizzaDiv.appendChild(newPizzaP);
    umpcomingContainer.appendChild(newPizzaDiv)
}

if (seniorBBall) {
    let newBBallDiv = document.createElement("div");
    newBBallDiv.setAttribute("class", "vBallGameDiv")

    let newBBallH1 = document.createElement("a");
    newBBallH1.textContent = seniorBBall;
    newBBallH1.setAttribute("href", "girlsBasketball.html")
    newBBallH1.setAttribute("class", "game-title")

    let newBBallP = document.createElement("p")
    newBBallP.textContent = seniorBBallDetails;
    newBBallP.setAttribute("class", "game-details")

    let newBBallDate = document.createElement("p")
    newBBallDate.textContent = seniorBBallDate;
    newBBallP.setAttribute("class", "game-details")

    newBBallDiv.appendChild(newBBallH1);
    newBBallDiv.appendChild(newBBallDate)
    newBBallDiv.appendChild(newBBallP);
    umpcomingContainer.appendChild(newBBallDiv)
}


for (i = 0; i < paDays.length; i++) {
    if(paDays[i].date.getDate() < currentDatePaDay.getDate() + 10 && paDays[i].date.getDate() >= currentDatePaDay.getDate()) {   
        let newPaDayDiv = document.createElement("div");
        newPaDayDiv.setAttribute("class", "vBallGameDiv")

        let newPaH1 = document.createElement("p");
        newPaH1.textContent = paDays[i].name;
        newPaH1.setAttribute("class", "game-title")

        let newPa = document.createElement("p")
        newPa.textContent = paDays[i].date.toLocaleString();
        newPa.setAttribute("class", "game-details")
        
        newPaDayDiv.appendChild(newPaH1);
        newPaDayDiv.appendChild(newPa)
        umpcomingContainer.appendChild(newPaDayDiv)
    }

}
console.log(clickedHome)
function addPaDays() {
for (i = 0; i < paDays.length; i++) {
        let newPaDayallDiv = document.createElement("div");
        newPaDayallDiv.setAttribute("class", "vBallGameDiv")

        let newPaallH1 = document.createElement("p");
        newPaallH1.textContent = paDays[i].name;
        newPaallH1.setAttribute("class", "game-title")

        let newPaall = document.createElement("p")
        newPaall.textContent = paDays[i].date.toLocaleString();
        newPaall.setAttribute("class", "game-details")
        
        newPaDayallDiv.appendChild(newPaallH1);
        newPaDayallDiv.appendChild(newPaall)
        allContainer.appendChild(newPaDayallDiv)
}
}
addPaDays()

function addvolleyball() {
    for (i = 0; i < gamesVolleyball.length; i++) {
            let newPaDayallDiv = document.createElement("div");
            newPaDayallDiv.setAttribute("class", "vBallGameDiv")
    
            let newPaallH1 = document.createElement("p");
            newPaallH1.textContent = "Senior Boys Volleyball: " + gamesVolleyball[i].name;
            newPaallH1.setAttribute("class", "game-title")
    
            let newPaall = document.createElement("p")
            newPaall.textContent = gamesVolleyball[i].Date.toLocaleString();
            newPaall.setAttribute("class", "game-details")
            
            newPaDayallDiv.appendChild(newPaallH1);
            newPaDayallDiv.appendChild(newPaall)
            allContainer.appendChild(newPaDayallDiv)
    }
}

if (addedVolleyball === "true") {
    addvolleyball()
    console.log("yippee")
    
}

function addGirlsBball() {
    for (i = 0; i < gamesGirlsBball.length; i++) {
            let newPaDayallDiv = document.createElement("div");
            newPaDayallDiv.setAttribute("class", "vBallGameDiv")
    
            let newPaallH1 = document.createElement("p");
            newPaallH1.textContent = gamesGirlsBball[i].name;
            newPaallH1.setAttribute("class", "game-title")
    
            let newPaall = document.createElement("p")
            newPaall.textContent = gamesGirlsBball[i].Date.toLocaleString();
            newPaall.setAttribute("class", "game-details")
            
            newPaDayallDiv.appendChild(newPaallH1);
            newPaDayallDiv.appendChild(newPaall)
            allContainer.appendChild(newPaDayallDiv)
    }
}

if (addedGirlsBball === "true") {
    addGirlsBball()
    console.log("yippee")
    
}