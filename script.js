@font-face {
    font-family: 'MyFont1';
    src: url('TT Bluescreens Trial Bold.ttf') format('truetype'); /* Adjust the path and format as needed */
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MyFont2';
    src: url('TT Backwards Script Trial Bold.otf') format('truetype'); /* Adjust the path and format as needed */
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MyFont3';
    src: url('DynaPuff-Regular.ttf') format('truetype'); /* Adjust the path and format as needed */
    font-weight: normal;
    font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=DynaPuff:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=DynaPuff:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

a {
    text-decoration: none;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html , body{
    height: 100%;
    width: 100%;
}

p {
    margin: 0px !important;
    padding: 0px !important;
}

.grid-container {
    z-index: 1;
    position: relative;
     display: grid;
    gap: 10px;
    background-color:#6482AD;
    padding: 10px;
    grid-template-columns: repeat(5, 1fr);
}   

.grid-item {
  text-align: center;
  font-size: 20px;
  height: 90px;
}

.item1 { 
    grid-column: span 1; grid-row: span 1; 
    text-align: start;
    font-size: 36px;    
}
.one {
    position: relative;
    font-family: 'MyFont1';
}


.item2 { 
    text-align: center;
    font-size: 36px;
    grid-column: span 2; grid-row: span 1; }
.two {
    margin-top: 14% !important;
    font-family: 'MyFont2';
}


.item3 { 
    font-size: 45px;
    grid-column: span 2; grid-row: span 1; }
.three {
    margin-top: 5% !important;
    font-family: "Atkinson Hyperlegible", sans-serif;
}



.item4 { 
    font-size: 25px;
    grid-column: span 1; grid-row: span 1; }
.four {
    margin-top: 15% !important;
    font-family: 'MyFont3';
}

.item5{ 
    font-size:35px;
    grid-column: span 1; grid-row: span 1; }
.five{
    margin-top: 26% !important;
    font-family: 'MyFont3';
}


.item6 { 
    font-size:35px;
    grid-column: span 1; grid-row: span 1; }
.six{
    margin-top: 26% !important;
    font-family: 'MyFont3';
}


.item7 { 
    font-size: 32px;
    grid-column: span 1; grid-row: span 1; }
.seven {
    margin-left: 45% !important;
    font-family: "Atkinson Hyperlegible", sans-serif;
}

.item8 { 
    font-size: 39px;
    grid-column: span 1; grid-row: span 1; }
.eight {
    font-family: 'MyFont1';
}


.item9 { 
    font-size: 28px;
    grid-column: span 1; grid-row: span 1; }
.nine {
    margin-top: 30% !important;
    margin-left: 10% !important;
    font-family: 'MyFont3';
}

.item10 { 
    font-size: 45px;
    grid-column: span 2; grid-row: span 1; }
.ten {
    margin-top: 4% !important;
    margin-left: 10% !important ;
    font-family: 'MyFont2';
}


.item11 { 
    font-size: 22px;
    grid-column: span 1; grid-row: span 1; }
.eleven {
    margin-top: 15% !important;
    margin-left: 14% !important;
    font-family: 'MyFont3';
}

.item12 {
    font-size: 28px;
    grid-column: span 1; grid-row: span 1; }
.twelve {
    margin-top: 18% !important;
    font-family: 'MyFont2';
}


.item13 { 
    font-size: 32px;
    grid-column: span 1; grid-row: span 1; }
.thirteen {
    margin-right: 20% !important;
    margin-top: 18% !important;
    font-family: 'MyFont1';
}


.item14 {
    font-size: 32px;
    grid-column: span 1; grid-row: span 1; }
.fourteen {
    margin-right: 20% !important;
    margin-top: 18% !important;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.item15 {
    font-size: 38px;
    grid-column: span 1; grid-row: span 1; }
.fifteen {
    font-family: 'MyFont1';
}

.item16 { 
    font-size: 32px;
    grid-column: span 2; grid-row: span 1; }
.sixteen {
    margin-left: 25% !important;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
    width: 100vw;
    height: 50vh;
    position: relative;
    z-index: 1;
    background-color: #6482AD;
}

.circle-container {
    height:120px;
    width:100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom:-25%;
}

.circle {
    height: 175px;
    width: 175px;
    border-radius: 50%;
    background-color: white;
    /* border: 2px solid lightgrey; */
    overflow: hidden;
}

.img {
    object-fit: contain;
    width:100%;
    height:auto;
}



@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-item {
    font-size: 15px;
    padding: 10px;
  }
}

.banner {
    position: absolute;
    height: 40%;
    width: 100vw;
    background-color: #7FA1C3;
    top:0%;
}

.text1 {
    margin-top: 10%;
    text-align: left;
    height:105px;
    width: 45vw;
    font-family: "Inter", sans-serif;
    font-size: 54px;
    font-weight: 700;
    color: white;
    position: absolute;
    right:4%;
    top: -11.5%;
}

.text2 {
    width: 50vw;
    position: relative;
    bottom:8%;
    left:3%;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: #543310;
}

.text3 {
    position: relative;
    bottom: 6%;
    left: 3%;
    width: 80vw;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #543310;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    position: relative;
}

.button {
    position: relative;
    background-color: #3572EF;
    border-radius: 6px;
    font-family: "Inter", sans-serif;
    border: none;
    font-size: 19px;
    color: #FFFFFF;
    padding: 20px;
    height: 50px;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .2s; 
  }

.button:hover {
    transform: scale(1); 
    cursor: pointer;
}

.button::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
}

.button:active::after {
    transform: scale(3);
    opacity: 1;
    transition: transform 0.2s, opacity 0.2s;
}


@media (max-width:1024px){
    .text1 {
        font-size: 45px;
        top: -12%;
    }
    .text2 {
        bottom: 18%;
        left: 5%;
    }
    .text3 {
        bottom: 16%;
        left: 5%;
    }
        .button-container {
           bottom: 14%;
        }
}

@media (max-width:999px) {
    .text2 {
        bottom: 19%;
        left: 4%;
        width: 522px;
    }
    .text3 {
        bottom: 17%;
        left: 4%;
        font-size: 25px;
    }
    .button-container {
        bottom: 15%;
    }
}


@media (max-width:768px) {
    .item7 { 
        font-size: 32px;
    }
    .seven {
        margin-left: 0% !important;
        margin-top: 20% !important;
    }
    
    .item8 { 
        font-size: 39px;
        grid-column: span 1; grid-row: span 1; }
    .eight {
        font-family: 'MyFont1';
        margin-top: 25% !important;
    }

    .text1 {
        font-size: 43px;
        top: -7%;
    }
    .text2 {
        font-size: 30px;
        bottom: 20%;
        width: 500px;
        left: 4%;
    }
    .text3 {
        font-size: 23px;
        bottom: 18%;
        left: 4%;
    }
    .button-container {
        margin-top: 3%;
    }
}


/* @media (min-device-width:768px) and (max-device-width: 1023px) {
   
    .item7 { 
        font-size: 32px;
    }
    .seven {
        margin-left: 0% !important;
        margin-top: 20% !important;
    }
    
    .item8 { 
        font-size: 39px;
        grid-column: span 1; grid-row: span 1; }
    .eight {
        font-family: 'MyFont1';
        margin-top: 25% !important;
    }

    .text1 {
        font-size: 38px;
        top: -1%;
    }
    .text2 {
        font-size: 30px;
        width: 100%;
    }
    .text3 {
        font-size: 21px;
    }
    .button-container {
        margin-top: 3%;
    }
}

@media (min-device-width:1024px) and (max-device-width: 1200px) {
   
    .item7 { 
        font-size: 32px;
    }
    .seven {
        margin-left: 0% !important;
        margin-top: 20% !important;
    }
    
    .item8 { 
        font-size: 39px;
        grid-column: span 1; grid-row: span 1; }
    .eight {
        font-family: 'MyFont1';
        margin-top: 25% !important;
    }

    .text1 {
        right: -8%;
        font-size: 52px;
        top: -14%;
        width: 550px;
    }
    .text2 {
        top:-14%;
        font-size: 36px;
        width: 100%;
        left:5%;
    }
    .text3 {
        top:-12%;
        font-size: 26px;
        left:5%;
    }
    .button-container {
        margin-top: -3%;
        width: 1;
    }

    .banner {
        width: 110%;
    }
}


@media (min-device-width:1201px) and (max-device-width: 1368px) {
   
    .item7 { 
        font-size: 32px;
    }
    .seven {
        margin-left: 0% !important;
        margin-top: 20% !important;
    }
    
    .item8 { 
        font-size: 39px;
        grid-column: span 1; grid-row: span 1; }
    .eight {
        font-family: 'MyFont1';
        margin-top: 25% !important;
    }

    .fifteen {
        margin-left: 93% !important;
    }

    .text1 {
        right: -6%;
        font-size: 50px;
        top: -14%;
        width: 550px;
    }

    .text2 {
        top:-14%;
        font-size: 36px;
        width: 100%;
        left:5%;
    }
    .text3 {
        top:-12%;
        font-size: 26px;
        left:5%;
    }
    .button-container {
        margin-top: -1%;
        width: 110%;
    }

    .banner {
        width: 110%;
    }
} */
