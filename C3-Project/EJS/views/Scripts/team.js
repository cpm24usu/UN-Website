document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        let teamContent = document.getElementById("teamSection"); // gets id of div for main page section

        const title = document.createElement("h1");
        title.setAttribute("id", "teamTitle");
        title.textContent = responseData.team.content.title;
        teamContent.appendChild(title);
        // creates header element for the page title

        const overview = document.createElement("p");
        overview.setAttribute("id", "teamOverview");
        overview.textContent = responseData.team.content.info;
        teamContent.appendChild(overview);
        // creates paragraph element to hold information about the page


        const ellieSection = document.createElement("article");
        ellieSection.setAttribute("class", "members")
        ellieSection.setAttribute("id", "ellie");
        teamContent.appendChild(ellieSection);
        const ellie = document.createElement("h3");
        ellie.setAttribute("class", "names");
        ellie.textContent = responseData.team.content.members.member1;
        ellieSection.appendChild(ellie);
        const eBio = document.createElement("p");
        eBio.setAttribute("class", "bios");
        eBio.textContent = responseData.team.content.bios.ellieBio;
        ellieSection.appendChild(eBio);
     

        const nathSection = document.createElement("article");
        nathSection.setAttribute("class", "members")
        nathSection.setAttribute("id", "nathan");
        teamContent.appendChild(nathSection);
        const nathan = document.createElement("h3");
        nathan.setAttribute("class", "names");
        nathan.textContent = responseData.team.content.members.member2;
        nathSection.appendChild(nathan);
        const nBio = document.createElement("p");
        nBio.setAttribute("class", "bios");
        nBio.textContent = responseData.team.content.bios.nathanBio;
        nathSection.appendChild(nBio);
        
        

        const philSection = document.createElement("article");
        philSection.setAttribute("class", "members")
        philSection.setAttribute("id", "phil");
        teamContent.appendChild(philSection);
        const phil = document.createElement("h3");
        phil.setAttribute("class", "names");
        phil.textContent = responseData.team.content.members.member3;
        philSection.appendChild(phil);
        const pBio = document.createElement("p");
        pBio.setAttribute("class", "bios");
        pBio.textContent = responseData.team.content.bios.philBio;
        philSection.appendChild(pBio);
        

        const vicSection = document.createElement("article");
        vicSection.setAttribute("class", "members");
        vicSection.setAttribute("id", "vic");
        teamContent.appendChild(vicSection);
        const vic = document.createElement("h3");
        vic.setAttribute("class", "names");
        vic.textContent = responseData.team.content.members.member4;
        vicSection.appendChild(vic);
        const vBio = document.createElement("p");
        vBio.setAttribute("class", "bios");
        vBio.textContent = responseData.team.content.bios.vicBio;
        vicSection.appendChild(vBio);

        // creates section for each member to hold name and bios

        const container = document.createElement("div");
        container.setAttribute("id", "bannerContainer");
        teamContent.appendChild(container);
        // creates a section to hold the goals image
       

        const banner = document.createElement("img");
        banner.setAttribute("id", "banner");
        banner.setAttribute("alt", "A banner saying 'Sustainable Development Goals'");
        banner.src = responseData.team.content.goalsBanner;
        container.appendChild(banner);
        // creates image element to display the goal image

       

        







        


        

        
        

    })
    .catch(error => console.error("Error fetching JSON data:", error));

})