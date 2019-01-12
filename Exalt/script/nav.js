let navItems = document.querySelectorAll(".navItem");
let nav = document.getElementById("nav");
let toggle = document.getElementById('toggleNav')
let body = document.getElementById('body')
let h1 = document.getElementById('mainHomeText')
let h21 = document.getElementById('HomeText1')
let h22 = document.getElementById('HomeText2')

window.addEventListener('resize',()=>{
//nav.style.height = "100%"
})

let open = true;

toggle.addEventListener('click',()=>{
    if(window.innerWidth > 1200 ){
    //console.log('c')
    if( open ){
        nav.style.left = "-300px";
        body.style.marginLeft = "0";
        toggle.style.left = "0"
        open = false;
        toggle.childNodes[0].className = "fa fa-bars" 
        h1.style.fontSize = "45px"
        h21.style.fontSize = "30px"
        h22.style.fontSize = "30px"
    }else{
        nav.style.left = "0";
        toggle.style.left = "253px"
        body.style.marginLeft = "300px"
        toggle.childNodes[0].className = "fa fa-times" 
        open = true;
        h1.style.fontSize = "60px"
        h21.style.fontSize = "40px"
        h22.style.fontSize = "40px"
    }
}else{
     //console.log('c')
     if( open ){
        nav.style.left = "-300px";
        body.style.marginLeft = "0";
        toggle.style.left = "0"
        open = false;
        toggle.childNodes[0].className = "fa fa-bars" 
       // h1.style.fontSize = "45px"
       // h21.style.fontSize = "30px"
       // h22.style.fontSize = "30px"
    }else{
        nav.style.left = "0";
        toggle.style.left = "253px"
        //body.style.marginLeft = "300px"
        toggle.childNodes[0].className = "fa fa-times" 
        open = true;
        //h1.style.fontSize = "60px"
        //h21.style.fontSize = "40px"
        //h22.style.fontSize = "40px"
    }

}
})