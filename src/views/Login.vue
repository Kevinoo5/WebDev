<template>
  <div class="login">
    <Header />
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
