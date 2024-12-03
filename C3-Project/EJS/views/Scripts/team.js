document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        let teamContent = document.getElementById("teamSection");

        const title = document.createElement("h1");
        title.textContent = responseData.team.content.title;
        teamContent.appendChild(title);

        const overview = document.createElement("p");
        overview.textContent = responseData.team.content.info;
        teamContent.appendChild(overview);

        const teamSections = [4]
        for (var i = 0; i < teamSections.length; i++){
            teamSections[i] = document.createElement("article");
            teamContent.appendChild(teamSections[i]);
            
        }

        

        teamSections[0].setAttribute("id", "ellie");
        const ellie = document.createElement("h3");
        ellie.textContent = responseData.team.content.members.member1;
        const ellieBio = document.createElement("p");


        teamSections[1].setAttribute("id", "nathan");
        const nathan = document.createElement("h3");
        nathan.textContent = responseData.team.content.members.member2;

        teamSections[2].setAttribute("id", "phil");

        teamSections[3].setAttribute("id", "victoria");




        // const teamSection1 = document.createElement("section");
        // const teamSection2 = document.createElement("section");
        // const teamSection3 = document.createElement("section");
        // const teamSection4 = document.createElement("section");


        

        
        

    })
    .catch(error => console.error("Error fetching JSON data:", error));

})