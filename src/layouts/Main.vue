<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="app-header" :class="{ 'd-none': isHidden }">
      <Navbar></Navbar>
    </header>
    <div class="app-container">
      <div class="col-md-12">
        <slot />
      </div>
    </div>
    <footer class="app-footer">
      <Footer></Footer>
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
      isHidden: false,
    };
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 0.4 * window.innerHeight;

      console.log(currentScrollPos, scrollThreshold);

      this.isHidden = currentScrollPos > scrollThreshold;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped></style>
