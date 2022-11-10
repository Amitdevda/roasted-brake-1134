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

        h3=document.createElement("h3")
        h3.innerText= e.name;

        divs.append(img,h3);
        document.querySelector("#cate").append(divs)

    })
}

let bag=[]
let cartitem=[]
// Best seller section

url="https://636c099fad62451f9fc24305.mockapi.io/bs"
fetch(url).then((res) => res.json()).then((out) => { bag=out; displayCard(out)}).catch((err) => alert(err));

function displayCard(data) {

    
 
    data.forEach((ele,i) => {

      divs=document.createElement("div")

      id=document.createElement("p")
      id.innerText=ele.id

      img=document.createElement("img")
      img.setAttribute("src",ele.img)

      h=document.createElement("h2")
      h.innerText= ele.name;

      p=document.createElement("p")
      p.innerText=ele.para;

      indiv=document.createElement("div")
      indiv.setAttribute("id","indiv")
      
      h4=document.createElement("h3")
      h4.innerText=ele.price

      btn=document.createElement("button")
      btn.innerText="Add To Cart"
      btn.setAttribute("id","cartbtn")
      btn.addEventListener("click",() => {
        cartitem.push(ele)
        localStorage.setItem("cartmai",JSON.stringify(cartitem))
      })

      ekaurdiv=document.createElement("div")
      ekaurdiv.setAttribute("id","botum")

      i=document.createElement("img")
      i.setAttribute("src",ele.icon)
      i.setAttribute("id","scooter")
        
      sp=document.createElement("span")
      sp.innerText="Today in 90 min"

      indiv.append(h4, btn)

      ekaurdiv.append(i,sp)

      divs.append(img,h,p,indiv,ekaurdiv)

      document.querySelector("#bs").append(divs)
    })
}
