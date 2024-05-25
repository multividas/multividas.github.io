// main
import MainLayout from '~/layouts/Main.vue'
// footer
import FooterLayout from '~/layouts/Footer.vue'
// Navbar
import NavbarLayout from '~/layouts/Navbar.vue'

import '~/assets/js/script.js'
import '~/assets/css/styles.css'

export default function (Vue, { head, isClient }) {
  // Set Navbar Navbar as a global component
  Vue.component('NavbarLayout', NavbarLayout)
  // Set Footer Footer as a global component
  Vue.component('FooterLayout', FooterLayout)
  // Set Main Main as a global component
  Vue.component('MainLayout', MainLayout)

  if (isClient) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-RMES2R70H8`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-RMES2R70H8');
    };
  }

  // head links
  head.link.push(
    {
      rel: 'canonical',
      href: 'https://multividas.com'
    },
    {
      rel: 'icon',
      href: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      rel: 'shortcut icon',
      href: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      rel: 'stylesheet',
      href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1698339335/mv-scss/main.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1700411908/mv-scss/footer.css'
    }
  )

  // meta headers
  head.meta.push(
    {
      name: 'theme-color',
      content: '#0f4c81'
    },
    {
      name: 'locale',
      content: 'en_US'
    },
    {
      name: 'type',
      content: 'Multividas is a social media blogging platform'
    },
    {
      name: 'title',
      content: 'Explore the diverse world of Multividas.'
    },
    {
      name: 'description',
      content: 'With Multividas, you can share threads, publish articles and news.'
    },
    {
      name: 'keywords',
      content: 'multividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threads'
    },
    {
      name: 'author',
      content: 'Soulaimane Yahya'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  )

  // opengraph meta tags
  head.meta.push(
    {
      property: 'og:description',
      content: 'With Multividas, you can share threads, publish articles and news.'
    },
    {
      property: 'og:image',
      content: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      property: 'og:url',
      content: 'https://multividas.com'
    },
    {
      property: 'og:site_name',
      content: 'Multividas'
    }
  )

  // Twitter Card
  head.meta.push(
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@multividaseng'
    },
    {
      name: 'twitter:title',
      content: 'Multividas is a social media blogging platform'
    },
    {
      name: 'twitter:description',
      content: 'With Multividas, you can share threads, publish articles and news.'
    },
    {
      name: 'twitter:image',
      content: 'https://developers.multividas.com/images/logo.svg'
    }
  )
}
