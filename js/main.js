// 1. Fungsi untuk mempermudah selektor
const $ = (target) => {
    const elems = document.querySelectorAll(target);
    return (elems.length > 1) ? elems : document.querySelector(target);
}

// 2. Listener untuk handle sidenav dan bagian testimonials
document.addEventListener('DOMContentLoaded', function(){
    M.Sidenav.init($('.sidenav'), {
        edge: 'right'
    });
    M.Carousel.init($('.carousel'), {
        shift: 30,
        fullWidth: true,
        indicators: true
    });
    setInterval(function(){
        M.Carousel.getInstance($('.carousel')).next();
    }, 20000);
})
// 3. Fungsi untuk menghilangkan dan memunculkan sidenav
const navbarIntersecting = new IntersectionObserver(function(entries, observer){
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            $('nav').style.top = "-50%";
        }else{
            $('nav').style.top = "0";
        }
    })
}, {
    rootMargin: '0px 0px -400px 0px'
});
navbarIntersecting.observe($('.teach'));
