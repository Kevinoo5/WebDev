<template>
  <div class="home">
    <Header />
      <main id="posts" class="feed">
        <Post
            v-for="post in posts"
            :key="post.post_id"
            :post="post"
        />
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
