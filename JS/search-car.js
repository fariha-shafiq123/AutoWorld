window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent', 'navbar-light');
        navbar.classList.add('solid', 'navbar-dark');
    } else {
        navbar.classList.remove('solid', 'navbar-dark');
        navbar.classList.add('transparent', 'navbar-light');
    }
});