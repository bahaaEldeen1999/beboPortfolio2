AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
    once: true,
    duration: 600
});

let homeNav = document.getElementById('homeNav');
let aboutNav = document.getElementById('aboutNav');
let servicesNav = document.getElementById('servicesNav');
let skillsNav = document.getElementById('skillsNav');
let contactNav = document.getElementById('contactNav');
let projectsNav = document.getElementById('projectsNav');
window.addEventListener('scroll',(e)=>{
    let home = document.getElementById('home').offsetTop;
let about = document.getElementById('about').offsetTop;
let services = document.getElementById('services').offsetTop;
let skills = document.getElementById('skills').offsetTop;
let contact = document.getElementById('contact').offsetTop;
let projects = document.getElementById('projects').offsetTop;
    var doc = document.documentElement;
    let h = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0) ;
    if( h < about ){
        homeNav.classList.add('active'); 
        skillsNav.classList.remove('active'); 
        aboutNav.classList.remove('active'); 
        servicesNav.classList.remove('active'); 
        contactNav.classList.remove('active'); 
        projectsNav.classList.remove('active'); 
    }else if( h > about && h < skills  ){
        homeNav.classList.remove('active'); 
        skillsNav.classList.remove('active'); 
        aboutNav.classList.add('active'); 
        servicesNav.classList.remove('active'); 
        contactNav.classList.remove('active'); 
        projectsNav.classList.remove('active'); 
    }else if( h>skills && h <projects ){
        homeNav.classList.remove('active'); 
        skillsNav.classList.add('active'); 
        aboutNav.classList.remove('active'); 
        servicesNav.classList.remove('active'); 
        contactNav.classList.remove('active'); 
        projectsNav.classList.remove('active'); 
    }else if( h > projects && h<services){
        homeNav.classList.remove('active'); 
        skillsNav.classList.remove('active'); 
        aboutNav.classList.remove('active'); 
        servicesNav.classList.remove('active'); 
        contactNav.classList.remove('active'); 
        projectsNav.classList.add('active'); 
    }else if( h > services && h < contact ){
        homeNav.classList.remove('active'); 
        skillsNav.classList.remove('active'); 
        aboutNav.classList.remove('active'); 
        servicesNav.classList.add('active'); 
        contactNav.classList.remove('active'); 
        projectsNav.classList.remove('active'); 
    }else if ( h>contact ){
        homeNav.classList.remove('active'); 
        skillsNav.classList.remove('active'); 
        aboutNav.classList.remove('active'); 
        servicesNav.classList.remove('active'); 
        contactNav.classList.add('active'); 
        projectsNav.classList.remove('active'); 
    }

});
//loader
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
      
    }, 2000);
});