<template>
  <div class="login">
    <Header />
    <div class="pagecontent">
      <div class="middlebox">
        <h1>Welcome to PostIt</h1>
        <a href="">Create an account</a>
        <p>or<br>Please log in</p>
        <form action="index.html" method="post">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          >
          <br>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required>
          <br>
          <button class="button" type="submit">Log in</button>
        </form>
        <a href="">Forgot password?</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Login',
  components: {
    Footer,
    Header,
  }
}
</script>
