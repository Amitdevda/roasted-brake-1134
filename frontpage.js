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
