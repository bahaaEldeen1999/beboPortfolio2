//filter
let filterAllBtn = document.getElementById('filterAll');
let filter1Btn = document.getElementById('filter1');
let filter2Btn = document.getElementById('filter2');
let filter3Btn = document.getElementById('filter3');
let filter4Btn = document.getElementById('filter4');
let filterAll = document.querySelectorAll('.filter');
let filter1 = document.querySelectorAll('.filter1');
let filter2 = document.querySelectorAll('.filter2');
let filter3 = document.querySelectorAll('.filter3');
let filter4 = document.querySelectorAll('.filter4');

//console.dir(filter2)
//console.dir(filter3)
//console.dir(filter4)
filterAllBtn.addEventListener('click',()=>{
    for(  item of filterAll){
        item.classList.add("animated") ;
        item.classList.add("fadeIn") ;
        item.classList.add("faster") ;
        item.style.display = "block"
        item.classList.remove("animated") ;
        item.classList.remove("fadeIn") ;
        item.classList.remove("faster") ;
    }
})
filter1Btn.addEventListener('click',()=>{
    for(  item of filterAll){
        item.classList.add("animated");
        item.classList.add("fadeOut");
        item.classList.add("faster");
        //console.dir(filter1[0].className)
            item.style.display = "none";
            item.classList.remove("animated");
            item.classList.remove("fadeOut");
            item.classList.remove("faster");
      
       
    }

    for(item of filter1){

       item.classList.add("animated") ;
       item.classList.add("fadeIn") ;
       item.classList.add("faster") ;
       item.style.display = "block"
       item.classList.remove("animated") ;
       item.classList.remove("fadeIn") ;
       item.classList.remove("faster") ;
    }
})
filter4Btn.addEventListener('click',()=>{
    for(  item of filterAll){
        item.classList.add("animated");
        item.classList.add("fadeOut");
        item.classList.add("faster");
        //console.dir(filter1[0].className)
            item.style.display = "none";
            item.classList.remove("animated");
            item.classList.remove("fadeOut");
            item.classList.remove("faster");
      
       
    }

    for(item of filter4){

       item.classList.add("animated") ;
       item.classList.add("fadeIn") ;
       item.classList.add("faster") ;
       item.style.display = "block"
       item.classList.remove("animated") ;
       item.classList.remove("fadeIn") ;
       item.classList.remove("faster") ;
    }
})
filter2Btn.addEventListener('click',()=>{
    for(  item of filterAll){
        item.classList.add("animated");
        item.classList.add("fadeOut");
        item.classList.add("faster");
        //console.dir(filter1[0].className)
            item.style.display = "none";
            item.classList.remove("animated");
            item.classList.remove("fadeOut");
            item.classList.remove("faster");
      
       
    }

    for(item of filter2){

       item.classList.add("animated") ;
       item.classList.add("fadeIn") ;
       item.classList.add("faster") ;
       item.style.display = "block"
       item.classList.remove("animated") ;
       item.classList.remove("fadeIn") ;
       item.classList.remove("faster") ;
    }
})
filter3Btn.addEventListener('click',()=>{
    for(  item of filterAll){
        item.classList.add("animated");
        item.classList.add("fadeOut");
        item.classList.add("faster");
        //console.dir(filter1[0].className)
            item.style.display = "none";
            item.classList.remove("animated");
            item.classList.remove("fadeOut");
            item.classList.remove("faster");
      
       
    }

    for(item of filter3){

       item.classList.add("animated") ;
       item.classList.add("fadeIn") ;
       item.classList.add("faster") ;
       item.style.display = "block"
       item.classList.remove("animated") ;
       item.classList.remove("fadeIn") ;
       item.classList.remove("faster") ;
    }
})
////////////////////////////////////////
let items = document.querySelectorAll('.filterItem') ;
let zoomIns = document.querySelectorAll('.fa-search-plus') ;
let exits = document.querySelectorAll(".exitIcon");
let nextIcon = document.querySelectorAll('.nextIcon');
let prevIcon = document.querySelectorAll('.prevIcon');
let firstFilter = document.getElementById('firstFilter');
let lastFilter = document.getElementById('lastFilter');

for(let item of items){
    item.addEventListener('mouseenter',(e)=>{
        let overlay = e.target.children[1];
        //console.dir( e.target.children[1]);
        overlay.children[0].className = "animated slideInDown"
        overlay.className = "overlayImg animated fadeIn faster"
       
        overlay.style.display = "block"; 
       
    })
    item.addEventListener('mouseleave',(e)=>{
        let overlay = e.target.children[1];
       // console.log( e.target.children[1]);
       overlay.children[0].className = "animated slideOutUp faster"
        overlay.className = "overlayImg animated fadeOut fast"
       // overlay.style.display = "none"; 
    })
}
for(let zoomIn of zoomIns ){
    zoomIn.addEventListener('click',(e)=>{
      let zoomedImg =  e.target.offsetParent.offsetParent.offsetParent.children[2] ;
        zoomedImg.className = "animated zoomedImg zoomIn faster";
        zoomedImg.style.display = "block"
    })
}
for( let exit of exits){
    exit.addEventListener('click',(e)=>{
        let zoomedImg =  e.target.offsetParent ;
        zoomedImg.className = "animated zoomedImg fadeOut faster";
       // zoomedImg.style.display = "block"
       setTimeout(()=>{
        zoomedImg.style.display = "none"
       },100)
    })
}

for(let nextI of nextIcon){
    nextI.addEventListener('click',(e)=>{
        let current = e.target.offsetParent.nextSibling.nextSibling.offsetParent;
        current.className = "animated zoomedImg fadeOut faster";
        if(e.target.offsetParent.nextSibling.nextSibling.offsetParent.nextSibling.parentElement.offsetParent.nextElementSibling){
        let next =  e.target.offsetParent.nextSibling.nextSibling.offsetParent.nextSibling.parentElement.offsetParent.nextElementSibling.children[0].children[2];
       console.dir(next);
       setTimeout(()=>{
       current.style.display = "none"
       },100);
       next.className = "animated zoomedImg slideInLeft faster";
       next.style.display = "block"
    }else{
       
      // console.dir(next);
       setTimeout(()=>{
       current.style.display = "none"
       },100);
       firstFilter.children[2].className = "animated zoomedImg slideInLeft faster";
       firstFilter.children[2].style.display = "block"
    }
       


    })
}

for(let prevI of prevIcon){
    prevI.addEventListener('click',(e)=>{
        let current = e.target.offsetParent.nextSibling.nextSibling.nextElementSibling.offsetParent;
       
        current.className = "animated zoomedImg fadeOut faster";
       // console.dir(prev);
         if(e.target.offsetParent.nextSibling.nextSibling.nextElementSibling.offsetParent.nextSibling.parentElement.offsetParent.previousElementSibling){
        
            let prev =   e.target.offsetParent.nextSibling.nextSibling.nextElementSibling.offsetParent.nextSibling.parentElement.offsetParent.previousElementSibling.children[0].children[2];
        setTimeout(()=>{
        current.style.display = "none"
        },100);
        prev.className = "animated zoomedImg slideInRight faster";
        prev.style.display = "block"
     }else{
       
       // console.dir(next);
       setTimeout(()=>{
        current.style.display = "none"
       },100);
       console.dir(lastFilter)
        lastFilter.children[2].className = "animated zoomedImg slideInRight faster";
        lastFilter.children[2].style.display = "block"
     }
       


    })
}