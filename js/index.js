const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const toggleDark = document.querySelector('.dark-btn');

navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

toggleDark.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') == 'dark'){ 
        document.documentElement.setAttribute('data-theme', 'light');
        toggleDark.textContent = "Dark Mode"
    }
    else{
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleDark.textContent = "Light Mode"
    }
})
