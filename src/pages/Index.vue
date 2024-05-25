<template>
  <MainLayout>
    <header id="header" class="header">
      <div class="stars">
        <div class="animation stars-small" />
        <div class="animation stars-large" />
      </div>
      <g-image
        class="multividas-logo"
        src="~/assets/images/png/nav-multividas-blogging-platform-multividas-social-media-blog-multividas-posts-threads-multividas-comments-discussions-multividas-short-texts-multividas-social-blogging.svg"
        alt="multividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threadsmultividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threadsmultividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threadsmultividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas"
      />
    </header>
    <main class="container px-4 py-2 my-4 py-md-5 my-md-2">
      <div class="card">
        <div class="card-body">
          <section class="announcement">
            <div class="announcement-header mb-3">
              <p class="announcement-date mb-2">Announced on July 7th, 2024.</p>
              <h3>Explore the diverse world of Multividas</h3>
            </div>
            <ul class="announcement-content-list mb-3">
              <li class="announcement-content-item">
                <span>Multividas.com began in ceo-founder</span>
                <span
                  role="button"
                  class="fw-bold text-primary text-decoration-underline"
                  @click="handleRedirect()"
                >
                  @soulaimaneyahya
                </span>
                <span>living room and neighborhood library in 2023 and willofficially released on July,2024.</span>
              </li>
              <li class="announcement-content-item">
                With Multividas, you can share threads, publish articles and news.
              </li>
              <li class="announcement-content-item">
                We started as a community for software engineers to share texts and short posts. Our goal is to buildthe EVERYTHING APP. Multividas.com will serve diverse services.
              </li>
              <li class="announcement-content-item">
                We'll provide more informations and details over the upcoming
                weeks and months.
              </li>
            </ul>
            <div class="announcement-footer">
              <p class="appreciation-text">
                Thank you,<br />
                the Multividas Team
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </MainLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home Page",
  },
  methods: {
    handleRedirect() {
      return window.open("https://soulaimaneyahya.com/", "_blank");
    },
  },
};
</script>

<style scoped>
</style>
