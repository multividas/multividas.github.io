// main
import MainLayout from '~/layouts/Main.vue'
// footer
import FooterLayout from '~/layouts/Footer.vue'
// Navbar
import NavbarLayout from '~/layouts/Navbar.vue'

import './assets/js/script.js'
import './assets/css/styles.css'

export default function (Vue, { router, head, isClient }) {
  // Set Navbar Navbar as a global component
  Vue.component('Navbar', NavbarLayout)
  // Set Footer Footer as a global component
  Vue.component('Footer', FooterLayout)
  // Set Main Main as a global component
  Vue.component('Main', MainLayout)

  // head links
  head.link.push({
    rel: 'shortcut icon',
    href: 'https://developers.multividas.com/images/logo.svg'
  }, {
    rel: 'stylesheet',
    href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1698339335/mv-scss/main.css'
  }, {
    rel: 'stylesheet',
    href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1700411908/mv-scss/footer.css'
  });

  // seop friendly
  head.meta.push({
    name: 'theme-color',
    content: '#0f4c81'
  }, {
    property: 'locale',
    content: 'en_US'
  }, {
    property: 'type',
    content: 'social media and blogging platform'
  }, {
    property: 'title',
    content: 'Explore the diverse world of Multividas.'
  }, {
    property: 'og:description',
    content: 'Multividas.com is a social media and blogging platform where people can share their short texts and posts, leaving comments and have discussions on threads.'
  }, {
    property: 'og:image',
    content: 'https://developers.multividas.com/images/logo.svg'
  }, {
    property: 'og:url',
    content: 'https://multividas.com'
  }, {
    property: 'og:site_name',
    content: 'Multividas'
  });
}
