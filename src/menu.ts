const navMenu = document.querySelector('#nav-menu'),
  navToggle = document.querySelector('#nav-toggle'),
  navClose = document.querySelector('#nav-close')

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu?.classList.add('show-menu')
  })
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu?.classList.remove('show-menu')
  })
}

// REMOVE MENU MOBILE WHEN CLICKING ON LINK
const navLinks = document.querySelectorAll('.nav_link')

const linkAction = () => {
  navMenu?.classList.remove('show-menu')
}

navLinks.forEach((link) => link.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
const header = document.querySelector('#header')
const scrollHeader = () => {
  window.scrollY >= 50
    ? header?.classList.add('bg-header')
    : header?.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

export {}
