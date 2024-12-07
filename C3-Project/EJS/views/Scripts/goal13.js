document.addEventListener('DOMContentLoaded', () =>{
    fetch("../JSON/main.json")
    .then(response => response.json())
    .then(responseData => {

        let main = document.getElementById("main");

        let description = document.querySelector('#description');
        let goalArticle = document.createElement('article');

        let G13title = document.createElement('h1');
        G13title.textContent  = responseData.goal13.filler.G13title

        goalArticle.id = "goal";
        let goalfigure = document.createElement('figure');

        let goalimg = document.createElement('img');
        //fetching image from json file
        goalimg.src = responseData.goal13.images.climateAction;
        goalimg.alt = responseData.goal13.alt.climateAction;
        goalimg.id = "goalimg";

        
        let figcap = document.createElement('figcaption');
        let goalText = document.createElement('p');
        //fetching text from json file
        goalText.textContent = responseData.goal13.filler.description;

        //combining the first set of elements 
        description.appendChild(goalArticle);
        goalArticle.appendChild(G13title);
        goalArticle.appendChild(goalfigure);
        goalfigure.appendChild(goalimg);
        goalfigure.appendChild(figcap);
        figcap.appendChild(goalText);


        // main information section 

        let mainInfo = document.getElementById("mainInfo");

        let infoArticle = document.createElement('article');
        infoArticle.id = "info";

        let mainHeading = document.createElement('h1');
        mainHeading.textContent = responseData.goal13.filler.mainheading; 

        let infoFigure = document.createElement('figure');
        infoFigure.classList.add("left");

        let infoImg = document.createElement('img');
        infoImg.src = responseData.goal13.images.imgone;
        infoImg.alt = responseData.goal13.alt.forest;
        infoImg.id = "forest"

        let figcapOne = document.createElement('figcaption');
        let infoText = document.createElement('p');
        infoText.textContent = responseData.goal13.filler.effects;

        let infoArticleOne = document.createElement('article');
        let infoFigureOne = document.createElement('figure');
        infoFigureOne.classList.add("right");

        let infoImgOne = document.createElement('img');
        infoImgOne.src = responseData.goal13.images.imgtwo;
        infoImgOne.alt = responseData.goal13.alt.tornado;
        infoImgOne.id = "tornado";

        let figcapTwo = document.createElement('figcaption');
        let infoTextOne = document.createElement('p');
        infoTextOne.textContent = responseData.goal13.filler.solutions;

        //adding the main info elemnets together 

        mainInfo.appendChild(infoArticle);
        infoArticle.appendChild(mainHeading);
        infoArticle.appendChild(infoFigure);
        infoFigure.appendChild(infoImg);
        infoFigure.appendChild(figcapOne);
        figcapOne.appendChild(infoText);

        mainInfo.appendChild(infoArticleOne);
        infoArticleOne.appendChild(infoFigureOne);
        infoFigureOne.appendChild(infoImgOne)
        infoFigureOne.appendChild(figcapTwo);
        figcapTwo.appendChild(infoTextOne);

        //break away image 

        let breakImg = document.createElement('img');
        breakImg.src = responseData.goal13.images.breakimg;
        breakImg.alt = responseData.goal13.alt.break;

        // stats section 

        let stats = document.querySelector('#stats');

        let statsArticle = document.createElement('article');
        statsArticle.id = "statsArticle";

        let statsTitle = document.createElement('h2');
        statsTitle.textContent = responseData.goal13.stats.statstitle;

        let plasticStatVal = document.createElement('p');
        plasticStatVal.textContent = responseData.goal13.stats.plasticVal;
        plasticStatVal.classList.add("dates");

        let plasticStat = document.createElement('p');
        plasticStat.textContent = responseData.goal13.stats.plastic;
        plasticStat.classList.add("facts");

        let disasterStatVal = document.createElement('p');
        disasterStatVal.textContent = responseData.goal13.stats.disasterVal;
        disasterStatVal.classList.add("dates");

        let disasterStat = document.createElement('p');
        disasterStat.textContent = responseData.goal13.stats.disaster;
        disasterStat.classList.add("facts");

        let paperStatVal = document.createElement('p');
        paperStatVal.textContent = responseData.goal13.stats.paperVal;
        paperStatVal.classList.add("dates");

        let paperStat = document.createElement('p');
        paperStat.textContent = responseData.goal13.stats.paper;
        paperStat.classList.add("facts");


        //combining stats elemnets 

        stats.appendChild(statsTitle);
        stats.appendChild(statsArticle);
        
        statsArticle.appendChild(plasticStatVal);
        statsArticle.appendChild(plasticStat);
        statsArticle.appendChild(paperStatVal);
        statsArticle.appendChild(paperStat);
        statsArticle.appendChild(disasterStatVal);
        statsArticle.appendChild(disasterStat);

        // inserting the break away image between sections two and three (main info and stats)
        // main.insertBefore(breakImg, stats);


        // last section
        let conclusion = document.getElementById('conclusion');

        let concArticle = document.createElement('article');

        let concTitle = document.createElement('h1');
        concTitle.textContent = responseData.goal13.filler.conctitle;
        let concFigure = document.createElement('figure');
        concFigure.classList.add("left");

        let concImg = document.createElement('img');
        concImg.src = responseData.goal13.images.imgfour;
        concImg.alt = responseData.goal13.alt.plantinhand;

        let concFigcap = document.createElement('figcaption');
        let concText = document.createElement('p');

        concText.textContent = responseData.goal13.filler.change;

        // combining elements 

        conclusion.appendChild(concArticle);
        concArticle.appendChild(concTitle);
        concArticle.appendChild(concFigure);
        concFigure.appendChild(concImg);
        concFigure.appendChild(concFigcap);
        concFigcap.appendChild(concText);  
    })

    .catch(error =>{ console.error("Error fetching JSON data", error);
        
    });
});