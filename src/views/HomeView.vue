<template>
  <div class="home">
    <Header />
      <main class="main-layout">
        <div></div>
        <section class="posts" id="posts" aria-label="Posts">
          <Post
            v-for="post in posts"
            :key="post.post_id"
            :post="post"
        />
        </section>
        <div></div>
      </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";
import {mapState} from "vuex";

export default {
  name: 'HomeView',
  computed: {
    ...mapState(["posts"]),
  },
  components: {
    Post,
    Footer,
    Header,
  }
}
</script>
