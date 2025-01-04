window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('transparent');
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
    navbar.classList.add('transparent');
  }
});

// _________________________

// _____ C O U N T E R ______
// Counter animation function
const counters = document.querySelectorAll('.counter h1');

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const count = +counter.innerText;
  const increment = Math.ceil(target / 50);

  if (count < target) {
    counter.innerText = count + increment;
    setTimeout(() => animateCounter(counter), 20);
  } else {
    counter.innerText = target;
  }
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('h1');
        counters.forEach(animateCounter);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const counterContainer = document.querySelector('.counter-container');
observer.observe(counterContainer);



//  ___ O W L - C A R O S U E L ___


$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false, 
    autoplay: true,
    autoplayTimeout: 2000, 
    autoplayHoverPause: true,
    smartSpeed: 600, 
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1440: {
        items: 5
      }
    }
  });
});


// Sell Your Car Modal section


function submit() {
  var Name = document.getElementById('fullName').value;
  alert(Name  + " Your AD is Posted")
}