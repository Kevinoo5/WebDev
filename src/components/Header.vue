<script>
export default {
  name: "Header.vue"
}
</script>

<template>
  <header class="header">
    <div class="header-links">
        <RouterLink to="/"><a class="header-link">Main</a></RouterLink>
        <RouterLink to="/login"><a class="header-link">Login</a></RouterLink>
      </div>
  </header>
</template>

<style scoped>

</style>