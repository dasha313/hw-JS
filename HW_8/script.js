
let title = document.createElement('title');
title.innerHTML = 'HW-8';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);


let style = document.createElement('style');
style.innerHTML = `
.title{
   font-family: 'Arvo', serif;
   font-weight: 400;
   font-size: 36px;
   line-height: 48px;
   width: 354;
   height: 48px;
   position: absolute;
   left: 37%;
   top: 110px;
   color: #212121;
   display: flex;
   align-items: center;
}
.subTitle{
   font-family: 'Open Sans', sans-serif;
   font-size: 14px;
   line-height: 26px;
   height: 26px;
   width: 464px;
   position: absolute;
   top: 170px;
   left: 34%;
   display: flex;
   align-items: center;
   text-align: center;
} 
.block{
   width: 401px;
   height: 480px;
   position: absolute;
   top: 261px;
   left: 240px;
   bottom: 139px;
   border: 1px solid #9FA3A7;
}
.blocl__text{
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   font-weight: 700px;
   font-size: 12px;
   line-height: 15px;
   color: #9FA3A7;
   width: 107px;
   height: 15px;
   position: absolute;
   left: 147px;
   top: 81px;
   display: flex;
   align-items: flex-end;
   text-align: center;
   letter-spacing: 2.4px;
}
.blocl__text2{
   font-family: 'Arvo', serif;
   font-style: normal;
   font-weight: 400px;
   font-size: 36px;
   line-height: 46px;
   color: #212121;
   width: 210px;
   height: 92px;
   position: absolute;
   left: 95px;
   top: 115px;
   display: flex;
   align-items: center;
   text-align: center;


}
.blocl__text3{
   font-family: 'Open Sans', sans-serif;
   font-size: 12px;
   line-height: 22px;
   color: #9FA3A7;
   width: 210px;
   height: 44px;
   position: absolute;
   left: 95px;
   top: 232px;
   display: flex;
   align-items: center;
   text-align: center;
}
.button button {
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   font-size: 12px;
   line-height: 15px;
   color: #212121;
   width: 165px;
   height: 60px;
   position: absolute;
   left: 112px;
   top: 331px;
   right: 114px;
   text-align: center;
   letter-spacing: 2.4px;
   border-radius: 100px;
   border: 3px solid #FFC80A;
   background-color: white;
}
.block2{
   width: 401px;
   height: 480px;
   position: absolute;
   top: 261px;
   left: 640px;
   right: 250px;
   bottom: 139px;
   border: 1px solid #9FA3A7;
   background-color: #8F75BE;
}
.block__text{
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   font-weight: 700px;
   font-size: 12px;
   line-height: 15px;
   color: #FFC80A;
   width: 61px;
   height: 15px;
   position: absolute;
   left: 171.5px;
   top: 81px;
   display: flex;
   align-items: flex-end;
   text-align: center;
   letter-spacing: 2.4px;
}
.block__text2{
   font-family: 'Arvo', serif;
   font-style: normal;
   font-weight: 400px;
   font-size: 36px;
   line-height: 46px;
   color: #fff;
   width: 210px;
   height: 92px;
   position: absolute;
   left: 95px;
   top: 115px;
   display: flex;
   align-items: center;
   text-align: center;


}
.block__text3{
   font-family: 'Open Sans', sans-serif;
   font-size: 12px;
   line-height: 22px;
   color: #fff;
   width: 210px;
   height: 44px;
   position: absolute;
   left: 95px;
   top: 232px;
   display: flex;
   align-items: center;
   text-align: center;
}

.button2 button {
   font-family: 'Montserrat', sans-serif;
   font-weight: bold;
   font-size: 12px;
   line-height: 15px;
   color: #fff;
   width: 165px;
   height: 60px;
   position: absolute;
   left: 112px;
   top: 331px;
   right: 114px;
   text-align: center;
   letter-spacing: 2.4px;
   border-radius: 100px;
   border: 3px solid #FFC80A;
   background-color: #8F75BE;
}
`;
document.head.appendChild(style);



let divTitle = document.createElement('div');
divTitle.innerHTML = 'Choose Your Option';
divTitle.setAttribute('class', 'title');
document.body.appendChild(divTitle);


let subTitle = document.createElement('div');
subTitle.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
subTitle.setAttribute('class', 'subTitle');
document.body.appendChild(subTitle);

let divblock = document.createElement('div');
divblock.setAttribute('class', 'block');
document.body.appendChild(divblock);

let blocl__text = document.createElement('div');
blocl__text.innerHTML = 'FREELANCER';
blocl__text.setAttribute('class', 'blocl__text');
divblock.appendChild(blocl__text);

let blocl__text2 = document.createElement('div');
blocl__text2.innerHTML = 'Initially designed to';
blocl__text2.setAttribute('class', 'blocl__text2');
divblock.appendChild(blocl__text2);

let blocl__text3 = document.createElement('div');
blocl__text3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
blocl__text3.setAttribute('class', 'blocl__text3');
divblock.appendChild(blocl__text3);

let buttonDiv = document.createElement('div');
buttonDiv.setAttribute('class', 'button');
divblock.appendChild(buttonDiv);

let button = document.createElement('button');
button.innerHTML = 'START HERE';
button.setAttribute('type', 'submit');
buttonDiv.appendChild(button);



let divblock2 = document.createElement('div');
divblock2.setAttribute('class', 'block2');
document.body.appendChild(divblock2);

let block__text = document.createElement('div');
block__text.innerHTML = 'STUDIO';
block__text.setAttribute('class', 'block__text');
divblock2.appendChild(block__text);

let block__text2 = document.createElement('div');
block__text2.innerHTML = 'Initially designed to';
block__text2.setAttribute('class', 'block__text2');
divblock2.appendChild(block__text2);

let block__text3 = document.createElement('div');
block__text3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block__text3.setAttribute('class', 'block__text3');
divblock2.appendChild(block__text3);

let buttonDiv2 = document.createElement('div');
buttonDiv2.setAttribute('class', 'button');
divblock2.appendChild(buttonDiv2);

let button2 = document.createElement('button');
button2.innerHTML = 'START HERE';
button2.setAttribute('type', 'submit');
buttonDiv2.appendChild(button2);













