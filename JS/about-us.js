// _____ C O U N T E R ______
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

// Observe the counter container
const counterContainer = document.querySelector('.counter-container');
observer.observe(counterContainer);