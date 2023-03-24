$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    })

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
})


//Progress bar animation when it is scrolled at here 
const animation_elements = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
        }
        else{
            entry.target.classList.remove("animate");
        }
    })
}, {
    threshold: 0.5
});

for(let i = 0;i<animation_elements.length; i++){
    const el = animation_elements[i];
    observer.observe(el);
}

//Skill boxes appear
const box_appearances = document.querySelectorAll(".skill .skill-content .box");

const observerSkill = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add("box-appear");
        }
        else{
            entry.target.classList.remove("box-appear");
        }
    })
}, {
    threshold: 0.5
});

for(let i = 0;i<box_appearances.length; i++){
    const el = box_appearances[i];
    observerSkill.observe(el);
}
