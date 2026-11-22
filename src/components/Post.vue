<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations(['incrementLikes']),

    formatDate(isoString) {
      return new Date(isoString).toLocaleString('et-EE', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    }
  }
}
</script>

<template>
  <article class="post">
    <header class="post-head">
      <h2 class="name">
        {{ post.author.name }}<br />
        <time :datetime="post.creation_time">
          {{ formatDate(post.creation_time) }}
        </time>
      </h2>
    </header>

    <img
        v-if="post.media"
        :src="post.media.reference"
        :alt="post.media.alt_text || ''"
        loading="lazy"
        class="post-img"
    />

    <p class="post-text">{{ post.content }}</p>

    <button
        type="button"
        class="like"
        @click="incrementLikes(post.post_id)"
    >
      👍 {{ post.likes }}
    </button>
  </article>
</template>