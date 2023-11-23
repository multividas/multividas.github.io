<template>
  <nav class="navbar navbar-expand-md bg-light-darken shadow-sm py-3 py-md-3">
    <div class="container-lg md:row d-md-flex justify-content-between">
      <div class="d-flex justify-content-start align-items-center gap-2">
        <g-image alt="logo" src="~/assets/images/png/nav-logo.png" width="35" />
        <strong>
          <g-link to="/" class="navbar-brand text-white fw-bold fs-4">Multividas</g-link>
        </strong>
      </div>
      <ul class="d-flex justify-content-end align-items-start gap-4">
        <li class="nav-item">
          <a class="nav-link text-white" href="https://about.multividas.com" target="_blank"
            >About us</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style scoped></style>
