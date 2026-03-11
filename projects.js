const targetSection = document.getElementById('project');

const options = {
  root: null, 
  rootMargin: '0px', 
  threshold: 0.2
};

const callback1 = (entries, observer1) => {
  entries.forEach(entry => {
    const element1 = document.getElementById('card1')
    const element2 = document.getElementById('card2')
    const element3 = document.getElementById('card3')
    if (entry.isIntersecting) {
      element1.classList.add("bringIn5")
      element1.classList.remove("bringOut5")
      element2.classList.add("bringIn6")
      element2.classList.remove("bringOut6")
      element3.classList.add("bringIn7")
      element3.classList.remove("bringOut7")
      // observer.unobserve(entry.target); 
    } 
    else {
      element1.classList.add("bringOut5")
      element1.classList.remove("bringIn5")
      element2.classList.add("bringOut6")
      element2.classList.remove("bringIn6")
      element3.classList.add("bringOut7")
      element3.classList.remove("bringIn7")
    }
  });
};

const observer = new IntersectionObserver(callback1, options1);

if (targetSection) {
  observer.observe(targetSection);
}