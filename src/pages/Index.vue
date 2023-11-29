<template>
  <MainLayout>
    <header id="header" class="header">
      <div class="stars">
        <div class="animation stars-small" />
        <div class="animation stars-large" />
      </div>
      <h1 class="fw-bold text-white">Multividas.com</h1>
    </header>
    <main class="container px-4 py-2 my-4 py-md-5 my-md-2">
      <div class="card">
        <div class="card-body">
          <section class="announcement">
            <div class="announcement-header mb-3">
              <p class="announcement-date mb-2">Announced on July 7th, 2024.</p>
              <h3>Explore the diverse world of Multividas</h3>
            </div>
            <ul class="announcement-content mb-3">
              <li>
                <span>Multividas.com began in ceo-founder</span>
                <span
                  role="button"
                  class="fw-bold text-primary text-decoration-underline"
                  @click="handleRedirect()"
                >
                  @soulaimaneyahya
                </span>
                <span>living room and neighborhood library in 2023 and will officially released on July,2024.</span>
              </li>
              <li>
                Our mission is to build the app of everything, creating a diverse and inclusive
                world for everyone to share threads posts.
              </li>
              <li>
                Multividas.com is a social media and blogging platform where people can share their
                short texts and posts, leaving comments and have discussions on threads.
              </li>
              <li>
                We'll provide more informations and details over the upcoming weeks and months.
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
    title: 'Home Page'
  },
  methods: {
    handleRedirect() {
      return window.open('https://soulaimaneyahya.com/', '_blank')
    }
  }
}
</script>

<style></style>

<style scoped></style>
