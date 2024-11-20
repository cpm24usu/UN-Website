document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        // Main page content //

        let goalContent = document.getElementById("goalContent");
        const title = document.createElement("h1");
        title.textContent = responseData.goal6.content.title;
        goalContent.appendChild(title);

        const goalOverview = document.createElement("p");
        goalOverview.textContent = responseData.goal6.content.overview;
        goalContent.appendChild(goalOverview);

    })

        
        





        

       

    
    .catch(error => console.error("Error fetching JSON data:", error))
})