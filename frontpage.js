// nav1


// Banner

var set=[
    "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/delicious-chicken-design-template-5e750b899fbdeb5150a4d447afcc23ad_screen.jpg?ts=1616686466",
    "https://www.taazameatonline.com/uploads/media/2022/taazameat-banner6.jpg",
    "https://www.taazameatonline.com/uploads/media/2022/taazameat-banner5.jpg",
    "https://img.freepik.com/premium-photo/variety-raw-black-angus-prime-meat-steaks-beef-rump-steak-tenderloin-fillet-mignon-grilling-with-seasoning-black-background-banner-menu-recipe-top-view_114941-1920.jpg?w=2000",
]
let banner=0
slide= setInterval(() => {
    document.querySelector("#ban").src= set[banner]
    banner++
    if (banner == set.length ){
        banner=0
    }
},3000)
// Categories data


let url="https://636c099fad62451f9fc24305.mockapi.io/cards";
fetch(url).then((res) => res.json()).then((out) => display(out)).catch((err) => alert(err))

function display(data){
   
    data.forEach((e,i) => {

        divs=document.createElement("div")

        img=document.createElement("img")
        img.setAttribute("src",e.img)
        img.addEventListener("click",() => {
            filer(e)
        })

        h3=document.createElement("h3")
        h3.innerText= e.name;

        divs.append(img,h3);
        document.querySelector("#cate").append(divs)

    })
}


// let cartitem=JSON.parse(localStorage.getItem("cartmai"))||[]
// // Best seller section
// url="https://636c099fad62451f9fc24305.mockapi.io/fpd"
// fetch(url).then((res) => res.json()).then((out) => { displayCard(out)}).catch((err) => alert(err));

// function displayCard(data) {

//     document.querySelector(".bs").innerHTML=null;
 
//     data.forEach((ele,i) => {

//       divs=document.createElement("div")

//       id=document.createElement("p")
//       id.innerText=ele.idd

//       img=document.createElement("img")
//       img.setAttribute("src",ele.img)

//       h=document.createElement("h2")
//       h.innerText= ele.name;

//       p=document.createElement("p")
//       p.innerText=ele.p;

//       indiv=document.createElement("div")
//       indiv.setAttribute("id","indiv")
      
//       h4=document.createElement("h3")
//       h4.innerText="MRP:-"+ele.rate

//       btn=document.createElement("button")
//       btn.innerText="Add To Cart"
//       btn.setAttribute("id","cartbtn")
//       btn.addEventListener("click",() => {
//         cartalert(ele);
       
//       })
//      let hr = document.createElement("hr")

//       ekaurdiv=document.createElement("div")
//       ekaurdiv.setAttribute("id","botum")
      
//       i=document.createElement("img")
//       i.setAttribute("src",ele.ico)
//       i.setAttribute("id","scooter")
        
//       sp=document.createElement("span")
//       sp.innerText="Today in 9 min"

//       indiv.append(h4, btn)

//       ekaurdiv.append(i,sp)

//       divs.append(img,h,p,indiv,hr,ekaurdiv)

//       document.querySelector(".bs").append(divs)
//     })
    
// }

// function cartalert(ele,i){
//     let flag=false;
//     for(i=0;i<cartitem.length;i++){
//         if(ele.idd==cartitem[i].idd){
//           flag=true;
//         }
//     }if(flag==true){
//         alert("Item is already in Cart")
//     }else{
//         cartitem.push(ele)
//         localStorage.setItem("cartmai",JSON.stringify(cartitem))
//     }

// }

