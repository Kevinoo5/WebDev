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
        <button class="button" @click="resetLikes">Reset likes</button>
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
import { mapMutations } from 'vuex'
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
  },
  methods: {
    ...mapMutations(['resetLikes'])
  }
}
</script>
