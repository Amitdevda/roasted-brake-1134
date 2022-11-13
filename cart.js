let aagya=JSON.parse(localStorage.getItem("cartmai"))
let underse=JSON.parse(localStorage.getItem("innercart"))
  
let jhola=[...underse,...aagya]
console.log(jhola)


totcart=jhola.reduce((arr,e) =>{
  return arr + Number(e.rate)
},0)

document.querySelector("#total>span").innerText=totcart

displaycart(jhola)

function displaycart(jhola) {

  document.querySelector(".bs").innerHTML=null;
  
  jhola.forEach((ele,i) => {
  
    divs=document.createElement("div")
  
    idd=document.createElement("p")
    idd.innerText=ele.idd
  
    img=document.createElement("img")
    img.setAttribute("src",ele.img)
  
    h=document.createElement("h2")
    h.innerText= ele.name;
  
    p=document.createElement("p")
    p.innerText=ele.p;
  
    indiv=document.createElement("div")
    indiv.setAttribute("id","indiv")
    
    h4=document.createElement("h3")
    h4.innerText="MRP:-"+ele.rate

    ekaurdiv=document.createElement("div")
    ekaurdiv.setAttribute("id","botum")
  
    i=document.createElement("img")
    i.setAttribute("src",ele.ico)
    i.setAttribute("id","scooter")
      
    sp=document.createElement("span")
    sp.innerText="Today in 9 min"
  
    indiv.append(h4)
  
    ekaurdiv.append(i,sp)
  
    divs.append(img,h,p,indiv,ekaurdiv)
  
    document.querySelector(".bs").append(divs)
  })
   
}

// document.querySelector("#total>button").addEventListener("click",() => {
   
//    divs=doccument.createElement("div")
//    divs.setAttribute("id","invibox")

//    p=document.createElement("p")
//    p.innerText="Order Summery :-"
 
//    ap=document.createElement("p")
//    ap.innerText="Total Items:-" + "val"
  
//    h=document.createElement("hr")

//    t=document.createElement("p")
//    t.innerText="Total Amount :-"+totcart

//   divs.append(p, ap , h ,t)
//   document.querySelector("#inv").append(divs)


// })

function openPopup(){
  document.querySelector("#paypal").style.display="block";
}