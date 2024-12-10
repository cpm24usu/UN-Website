document.addEventListener('DOMContentLoaded', ()=>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData =>{

        const goalheader = document.querySelector("#grid-contents-maincontent");
        const consumptionsec = document.querySelector("#unlogoc");
        const productionsec = document.querySelector("#head1");
        const sacsec = document.querySelector("#head2");
        const targetsec = document.querySelector("#unlogo3");
        const articlesec = document.querySelector('#articlelinks');
        const backtotopsec = document.querySelector('#backtotop')

        // const articlelinks = document.createElement("p");
        // articlelinks.setAttribute("id", "articlelinks");
        // articlelinks.textContent = responseData.goal12.content.articlelinks;
        // articlesec.appendChild(articlelinks);

        const unlogocLink = document.createElement("a");
        unlogocLink.setAttribute("class", "articlelinks");
        unlogocLink.textContent = responseData.goal12.content.consumptionlink;
        unlogocLink.href = "#unlogoc";
        articlesec.appendChild(unlogocLink);

        const head1Link = document.createElement("a");
        head1Link.setAttribute("class", "articlelinks");
        head1Link.textContent = responseData.goal12.content.productionlink;
        head1Link.href = "#head1";
        articlesec.appendChild(head1Link);

        const head2Link = document.createElement("a");
        head2Link.setAttribute("class", "articlelinks");
        head2Link.textContent = responseData.goal12.content.SAClink;
        head2Link.href = "#head2";
        articlesec.appendChild(head2Link);


        const consumptionvideo = document.createElement("video");
        consumptionvideo.setAttribute("class", "articlelinks");
        consumptionvideo.setAttribute("id", "consumptionvideo");
        consumptionvideo.setAttribute("controls", "controls");
        consumptionvideo.src = responseData.goal12.content.consumptionvideo;
        articlesec.appendChild(consumptionvideo);

        const topLink = document.createElement("a");
        topLink.setAttribute("class", "subheadinglinkstop");
        topLink.setAttribute("id", "topLink");
        topLink.textContent = responseData.goal12.content.top;
        topLink.href = "#top";
        backtotopsec.appendChild(topLink);

        const title = document.createElement("h1");
        title.setAttribute("id", "title");
        title.textContent = responseData.goal12.content.title;
        goalheader.appendChild(title);

        const Overview = document.createElement("p");
        Overview.setAttribute("id", "Overview")
        Overview.textContent = responseData.goal12.content.overview;
        goalheader.appendChild(Overview);

        const uncrpg12 = document.createElement("img");
        uncrpg12.setAttribute("id", "uncrpg12");
        uncrpg12.setAttribute("alt", "Image from the UN website showing a man cleaning hazardous materials");
        uncrpg12.src = responseData.goal12.content.uncrpg12;
        consumptionsec.appendChild(uncrpg12);

        const Consumptionh = document.createElement("h2");
        Consumptionh.setAttribute("id", "Consumptionh");
        Consumptionh.textContent = responseData.goal12.content.Consumptionh;
        consumptionsec.appendChild(Consumptionh);

        const Consumptionp = document.createElement("p");
        Consumptionp.setAttribute("id", "Consumptionp");
        Consumptionp.textContent = responseData.goal12.content.Consumptionp;
        consumptionsec.appendChild(Consumptionp);

        const Productionh = document.createElement("h2");
        Productionh.setAttribute("id", "Productionh");
        Productionh.textContent = responseData.goal12.content.Productionh;
        productionsec.appendChild(Productionh);

        const Productionp = document.createElement("p");
        Productionp.setAttribute("id", "Productionp");
        Productionp.textContent = responseData.goal12.content.Productionp;
        productionsec.appendChild(Productionp);

        const greeng12 = document.createElement("img");
        greeng12.setAttribute("id", "greeng12");
        greeng12.setAttribute("alt", "Weighing scales made of grass/leaves in a field");
        greeng12.src = responseData.goal12.content.greeng12;
        sacsec.appendChild(greeng12);

        const HowtheSACplanstotackletheseissuesh = document.createElement("h2");
        HowtheSACplanstotackletheseissuesh.setAttribute("id", "HowtheSACplanstotackletheseissuesh");
        HowtheSACplanstotackletheseissuesh.textContent = responseData.goal12.content.HowtheSACplanstotackletheseissuesh;
        sacsec.appendChild(HowtheSACplanstotackletheseissuesh);

        const HowtheSACplanstotackletheseissuesp = document.createElement("p");
        HowtheSACplanstotackletheseissuesp.setAttribute("id", "HowtheSACplanstotackletheseissuesp");
        HowtheSACplanstotackletheseissuesp.textContent = responseData.goal12.content.HowtheSACplanstotackletheseissuesp;
        sacsec.appendChild(HowtheSACplanstotackletheseissuesp);
        
        const targetsh = document.createElement("h2");
        targetsh.textContent = responseData.goal12.content.targetsp.targetsh;
        
        const targetsp = document.createElement("article");
        targetsp.setAttribute("id", "Scroll");
        targetsp.textContent = responseData.goal12.content.targetOverview;
        targetsec.appendChild(targetsp);
        targetsp.prepend(targetsh);
        
        const targetsList = [6];
        targetsList[0] = responseData.goal12.content.targetsp.target1;
        targetsList[1] = responseData.goal12.content.targetsp.target2;
        targetsList[2] = responseData.goal12.content.targetsp.target3;
        targetsList[3] = responseData.goal12.content.targetsp.target4;
        targetsList[4] = responseData.goal12.content.targetsp.target5;
        targetsList[5] = responseData.goal12.content.targetsp.target6;
    
        
       // console.log(targetsList);
        const tList = document.createElement("ol"); 
        for (var i = 0; i < targetsList.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerText = targetsList[i];
            tList.appendChild(listItem);

        }
        targetsp.appendChild(tList);

    })
    .catch(error => console.error("Error fetching JSON data:", error))
})