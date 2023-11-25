<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="app-header" :class="{ 'd-none': isHidden }">
      <NavbarLayout />
    </header>
    <div class="app-container">
      <div class="col-md-12">
        <slot />
      </div>
    </div>
    <footer class="app-footer">
      <FooterLayout />
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      isHidden: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY
      const scrollThreshold = 0.15 * window.innerHeight

      this.isHidden = currentScrollPos > scrollThreshold
    }
  }
}
</script>

<style scoped></style>
