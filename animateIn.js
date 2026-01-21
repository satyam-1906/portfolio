const targetSection = document.getElementById('about');

const options = {
  root: null, 
  rootMargin: '0px', 
  threshold: 0.2
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const element1 = document.getElementById('pic')
    const element2 = document.getElementById('big')
    const element3 = document.getElementById('small1')
    const element4 = document.getElementById('small2')
    if (entry.isIntersecting) {
      element1.classList.add("bringIn1")
      element1.classList.remove("bringOut1")
      element2.classList.add("bringIn2")
      element2.classList.remove("bringOut2")
      element3.classList.add("bringIn3")
      element3.classList.remove("bringOut3")
      element4.classList.add("bringIn4")
      element4.classList.remove("bringOut4")
      // observer.unobserve(entry.target); 
    } 
    else {
      element1.classList.add("bringOut1")
      element1.classList.remove("bringIn1")
      element2.classList.add("bringOut2")
      element2.classList.remove("bringIn2")
      element3.classList.add("bringOut3")
      element3.classList.remove("bringIn3")
      element4.classList.add("bringOut4")
      element4.classList.remove("bringIn4")
    }
  });
};

const observer = new IntersectionObserver(callback, options);

if (targetSection) {
  observer.observe(targetSection);
}