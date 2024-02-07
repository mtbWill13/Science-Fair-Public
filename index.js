let activities = [
    { name: "Senior Boys Volleyball", url: "volleyball.html", Date: new Date(2024, 0, 22)},
    { name: "soccer", url: "https://www.example.com/soccer" },
    { name: "hockey", url: "https://www.example.com/hockey" },
    { name: "baseball", url: "https://www.example.com/baseball" },
    { name: "pizza day", url: "pizzaDay.html" },
    { name: "Senior Girls Basketball", url: "girlsBasketball.html"}
];
console.log(activities[0].Date.getDate())

let inputEl = document.getElementById("search-input");
let resultsContainer = document.getElementById("results");
let currentdate = new Date()
console.log(currentdate)

inputEl.addEventListener("input", function() {
    updateResults();    
});

function updateResults() {
    let searchEntry = inputEl.value.toLowerCase();

    let filteredActivities = activities.filter(activity =>
        activity.name.toLowerCase().includes(searchEntry)
    );

    resultsContainer.innerHTML = '';

    filteredActivities.forEach(result => {
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', "search-items");

        let newLink = document.createElement("a");
        newLink.href = result.url;
        newLink.textContent = result.name;

        newDiv.appendChild(newLink);
        resultsContainer.appendChild(newDiv);
    });
}