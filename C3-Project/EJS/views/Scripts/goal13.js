document.addEventListener('DOMContentLoaded', () =>{
    fetch('../JSON/main.JSON')
    .then(response => response.json())
    .then(responseData => {

        let description = document.querySelector('#description');
        let goalArticle = document.createElement('article');
        goalArticle.id = "goal";
        let goalfigure = document.createElement('figure');

        let goalimg = document.createElement('img');
        //fetching image from json file
        goalimg.src = responseData.images.climateAction;
        goalimg.alt = responseData.alt.climateAction;
        goalimg.id = "goalimg";

        
        let figcap = document.createElement('figcaption');
        let goalText = document.createElement('p');
        //fetching text from json file
        goalText.textContent = responseData.filler.description;

        //combining the first set of elements 
        description.appendChild(goalArticle);
        goalArticle.appendChild(goalfigure);
        goalfigure.appendChild(goalimg);
        goalfigure.appendChild(figcap);
        figcap.appendChild(goalText);


        // main information section 

        let mainInfo = document.getElementById("mainInfo");

        let infoArticle = document.createElement('article');
        infoArticle.id = "info";
        let infoFigure = document.createElement('figure');
        infoFigure.classList.add("left");

        let infoImg = document.createElement('img');
        infoImg.src = responseData.images.imgone;
        infoImg.alt = responseData.alt.forest;
        infoImg.id = "forest"

        let figcapOne = document.createElement('figcaption');
        let infoText = document.createElement('p');
        infoText.textContent = responseData.filler.effects;

        let infoArticleOne = document.createElement('article');
        let infoFigureOne = document.createElement('figure');

        let infoImgOne = document.createElement('img');
        infoImgOne.src = responseData.images.imgtwo;
        infoImgOne.alt = responseData.alt.tornado;
        infoImgOne.id = "tornado";

        let figcapTwo = document.createElement('figcaption');
        let infoTextOne = document.createElement('p');
        infoTextOne.textContent = responseData.filler.solutions;

        //adding the main info elemnets together 

        mainInfo.appendChild(infoArticle);
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
        breakImg.src = responseData.images.breakimg;
        breakImg.alt = responseData.alt.break;

        // stats section 

        let stats = document.querySelector('#stats');

        let plasticStatVal = document.createElement('p');
        plasticStatVal.textContent = responseData.stats.plasticVal;

        let plasticStat = document.createElement('p');
        plasticStat.textContent = responseData.stats.plastic;

        let disasterStatVal = document.createElement('p');
        disasterStatVal.textContent = responseData.stats.disasterVal;

        let disasterStat = document.createElement('p');
        disasterStat.textContent = responseData.stats.disaster;

        let paperStatVal = document.createElement('p');
        paperStatVal.textContent = responseData.stats.paperVal;

        let paperStat = document.createElement('p');
        paperStat.textContent = responseData.stats.paper;


        //combining stats elemnets 

        stats.appendChild(plasticStatVal);
        stats.appendChild(plasticStat);
        stats.appendChild(paperStatVal);
        stats.appendChild(paperStat);
        stats.appendChild(disasterStatVal);
        stats.appendChild(disasterStat);

        // inserting the break away image between sections two and three (main info and stats)
        // main.insertBefore(breakImg, stats);


        // last section
        let conclusion = document.getElementById('conclusion');

        let concArticle = document.createElement('article');
        let concFigure = document.createElement('figure');
        concFigure.classList.add("left");

        let concImg = document.createElement('img');
        concImg.src = responseData.images.imgfour;
        concImg.alt = responseData.alt.plantinhand;

        let concFigcap = document.createElement('figcaption');
        let concText = document.createElement('p');

        concText.textContent = responseData.filler.change;

        // combining elements 

        conclusion.appendChild(concArticle);
        concArticle.appendChild(concFigure);
        concFigure.appendChild(concImg);
        concFigure.appendChild(concFigcap);
        concFigcap.appendChild(concText);


         /* Footer */
         const footer = document.querySelector("footer");
         footer.textContent = responseData.common.footer.content;
    })

    .catch(error =>{ console.error("Error fetching JSON data", error);
        
    });
});