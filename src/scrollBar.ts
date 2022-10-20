import ScrollReveal from 'scrollreveal'

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

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true,
})

sr.reveal(`.home_data, .footer_content, .footer_logo, .footer_description`)
sr.reveal(`.home_tree-1`, { origin: 'left', delay: 800 })
sr.reveal(`.home_tree-2`, { origin: 'right', delay: 800 })
sr.reveal(`.home_image`, { delay: 800 })

sr.reveal(`.category_card, .items_card`, { interval: 100 })

sr.reveal(`.about_image, .about_data, .footer_tree-2`, { origin: 'left' })

sr.reveal(`.party_images, .party_data, .footer_tree-1`, { origin: 'right' })
