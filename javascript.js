document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
const lazyImages = document.querySelectorAll('.lazy');

const lazyLoad = () => {
  lazyImages.forEach(img => {
    if (
      img.getBoundingClientRect(scroll).top < window.innerHeight + 100 && 
      img.getBoundingClientRect(load).bottom > -100 &&
      !img.src
    ) {
      img.src = img.dataset.src; 
      img.classList.add('loaded'); 
    }
  });
};

lazyLoad();

window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);

const scrollToTopButton = document.getElementById("scrollToTop");

const toggleScrollToTopButton = () => {
  if (window.scrollY > 500) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

window.addEventListener("scroll", debounce(toggleScrollToTopButton, 500));
window.addEventListener("load", toggleScrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});