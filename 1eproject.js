console.log("connect")
let sliderr = [
    {
        id:0,
        img:"../images/boy.jpg",
        name:"Aman Rajput",
        description:"Awesome classes and great teachers.Haven't felt this good in along time .This is simply the best coaching Center around. Highly Recommended !" 
    },
    {
        id:1,
        img:" ../images/girll.avif",
        name:" Syeda Fatima",
        description:"I have completed my batch.Teachers are highly qualified and cooperative. Clear all doubts.Best courses are avaliable here.I really like it.  "
    },
    {
        id:2,
        img:"../images/boy2.avif",
        name:"Hammad Khan",
        description:" I have done all the maths courses .It is a great coaching with knowledgeable courses and staff. "
    },
];

let image = document.getElementById("imgg");
let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");


let name = document.querySelector(".name");
let des = document.querySelector(".des");

let currentItem = 0;
window.addEventListener("DOMContentLoaded" , function (){
    slidedata(currentItem);

})
function slidedata(currentItem){
    let item = sliderr[currentItem];
    imgg.src = item.img;
    des.textContent = item.description;
    name.textContent = item.name;

}
nextbtn.addEventListener("click" , function(){
    currentItem++;
    if(currentItem > sliderr.length -1){
        currentItem =0;

    }
    slidedata(currentItem);
})
prevbtn.addEventListener("click" ,function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = sliderr.length - 1;

    }
    slidedata(currentItem);
})


