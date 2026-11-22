<script>
export default {
  name: "Header.vue"
}
</script>

<template>
  <header class="header">
    <div class="dropdown">
      <button class="dropbutton"><img src="pfp.jpg" alt="Profile"></button>
      <div id="dropDownMenu" class="dropdown-content">
        <p>Urmas Vallimäe</p>
        <p>urmasv@email.com</p>
        <a href="login.html">Logout</a>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>