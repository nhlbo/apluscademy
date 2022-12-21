const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-on-scroll-left')
    }
    // else entry.target.classList.remove('show-on-scroll-left')
  })
})

const hiddenElements = document.querySelectorAll('.hidden-on-scroll-left')
hiddenElements.forEach((element) => observer.observe(element))

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-on-scroll-right')
    }
    // else entry.target.classList.remove('show-on-scroll-right')
  })
})

const hiddenElementsRight = document.querySelectorAll('.hidden-on-scroll-right')
hiddenElementsRight.forEach((element) => observerRight.observe(element))
