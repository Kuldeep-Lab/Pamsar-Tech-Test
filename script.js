 window.addEventListener("load", () => {
      document.querySelectorAll(".underline").forEach(el => {
        el.classList.add("animate");
      });
    });

     // Animate counter function
  function animateCounter(el) {
    const target = +el.getAttribute("data-target");
    const duration = 2000; // in ms
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString(); // final value formatted
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, stepTime);
  }

  // Use IntersectionObserver so counters start only when in view
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // run once per counter
      }
    });
  }, { threshold: 0.5 }); // 50% visible

  counters.forEach(counter => {
    observer.observe(counter);
  });

  //  circle animation
 document.addEventListener("DOMContentLoaded", () => {
      const target = document.getElementById("circleTextSecond");

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            target.classList.add("active");
            observer.unobserve(target); // run only once
          }
        });
      }, { threshold: 0.5 }); // 50% visible

      observer.observe(target);
    });

//  circle animation
 document.addEventListener("DOMContentLoaded", () => {
      const target = document.getElementById("circleText");

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            target.classList.add("active");
            observer.unobserve(target); // run only once
          }
        });
      }, { threshold: 0.5 }); // 50% visible

      observer.observe(target);
    });