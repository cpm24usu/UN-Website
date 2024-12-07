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

        const ellieSection = document.createElement("article");
        ellieSection.setAttribute("class", "members")
        ellieSection.setAttribute("id", "ellie");
        teamContent.appendChild(ellieSection);
        const ellie = document.createElement("h3");
        ellie.textContent = responseData.team.content.members.member1;
        ellieSection.appendChild(ellie);
        const eBio = document.createElement("p");
        eBio.textContent = responseData.team.content.bios.ellieBio;
        ellieSection.appendChild(eBio);

        const nathSection = document.createElement("article");
        nathSection.setAttribute("class", "members")
        nathSection.setAttribute("id", "nathan");
        teamContent.appendChild(nathSection);
        const nathan = document.createElement("h3");
        nathan.textContent = responseData.team.content.members.member2;
        nathSection.appendChild(nathan);
        const nBio = document.createElement("p");
        nBio.textContent = responseData.team.content.bios.nathanBio;
        nathSection.appendChild(nBio);
        

        const philSection = document.createElement("article");
        philSection.setAttribute("class", "members")
        philSection.setAttribute("id", "phil");
        teamContent.appendChild(philSection);
        const phil = document.createElement("h3");
        phil.textContent = responseData.team.content.members.member3;
        philSection.appendChild(phil);
        const pBio = document.createElement("p");
        pBio.textContent = responseData.team.content.bios.philBio;
        philSection.appendChild(pBio);

        const vicSection = document.createElement("article");
        vicSection.setAttribute("class", "members");
        vicSection.setAttribute("id", "vic");
        teamContent.appendChild(vicSection);
        const vic = document.createElement("h3");
        vic.textContent = responseData.team.content.members.member4;
        vicSection.appendChild(vic);
        const vBio = document.createElement("p");
        vBio.textContent = responseData.team.content.bios.vicBio;
        vicSection.appendChild(vBio);







        


        

        
        

    })
    .catch(error => console.error("Error fetching JSON data:", error));

})