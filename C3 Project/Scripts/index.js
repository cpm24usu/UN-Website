document.addEventListener("DOMContentLoaded", function () {
    fetch('../JSON/index.json')
        .then(response => response.json())
        .then(data => {
            
            /*Displaying test data from the JSON file*/

            const dataDisplay = document.getElementById("jsonTest");

            const nameElement = document.createElement("p");
            nameElement.textContent = "Name: " + data.testData.name;

            const ageElement = document.createElement("p");
            ageElement.textContent = "Age: " + data.testData.age;

            const cityElement = document.createElement("p");
            cityElement.textContent = "City: " + data.testData.city;
            
            dataDisplay.appendChild(nameElement).setAttribute("class", "jsonText");
            dataDisplay.appendChild(ageElement).setAttribute("class", "jsonText");
            dataDisplay.appendChild(cityElement).setAttribute("class", "jsonText");


            /*Displaying Images from the JSON file*/

            const logoDisplay = document.getElementById("logo");
            const horizLogo = document.createElement("img");
            horizLogo.src = data.media[0].HorizontalLogo;
            logoDisplay.appendChild(horizLogo).setAttribute("id", "logoJS");

            const goal6 = document.getElementById("goal6");
            const imageElement = document.createElement("img");
            imageElement.src = data.media[0].goal6;
            goal6.appendChild(imageElement).setAttribute("id", "imgLink1");

            const goal12 = document.getElementById("goal12");
            const imageElement2 = document.createElement("img");
            imageElement2.src = data.media[0].goal12;
            goal12.appendChild(imageElement2).setAttribute("id", "imgLink2");

            const goal13 = document.getElementById("goal13");
            const imageElement3 = document.createElement("img");
            imageElement3.src = data.media[0].goal13;
            goal13.appendChild(imageElement3).setAttribute("id", "imgLink3");

        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
