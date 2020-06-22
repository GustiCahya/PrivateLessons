const $ = (target) => {
    const elems = document.querySelectorAll(target);
    return (elems.length > 1) ? elems : document.querySelector(target);
}

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
    }, 2000);
})