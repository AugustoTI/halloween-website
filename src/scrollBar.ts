const sections = document.querySelectorAll<HTMLElement>('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 58
    const sectionId = section.getAttribute('id')
    const sectionsClass = document.querySelector(
      `.nav_menu a[href*=${sectionId}]`
    )

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass?.classList.add('active-link')
    } else {
      sectionsClass?.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

const scrollUp = () => {
  const scrollUp = document.querySelector('#scroll-up')

  window.scrollY >= 350
    ? scrollUp?.classList.add('show-scroll')
    : scrollUp?.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

export {}
