import { createStore } from 'vuex'

export default createStore({
    strict: true,

    state: {
        posts: [
            {
                "media": null,
                "author": {
                    "name": "CheeseLover99"
                },
                "content": "I LOVE CHEEEEEEEEEEEESE!! 🧀🧀🧀🧀",
                "post_id": 1,
                "creation_time": "2026-09-01T12:00:00Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Anonymous"
                },
                "content": "I am stuck in a well, please let me out 👺",
                "post_id": 2,
                "creation_time": "2026-08-13T16:45:00Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Lucky Luke"
                },
                "content": "Let's go gambling! 🤑🤑🤑",
                "post_id": 3,
                "creation_time": "2026-06-17T20:10:00Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Confused Student"
                },
                "content": "Anyone knows in which room the lab is today?",
                "post_id": 4,
                "creation_time": "2010-03-31T09:15:00Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Gregorian Time Traveler"
                },
                "content": "Sleep time! 🛏️😴😴",
                "post_id": 5,
                "creation_time": "1582-12-24T22:00:00Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Elena Rostova"
                },
                "content": "Just deployed my first microservice using Rust! The performance gains are incredible. 🚀",
                "post_id": 6,
                "creation_time": "2026-10-25T14:32:00Z",
                "likes": 0
            },
            {
                "media": {
                    "alt_text": "Vibrant orange and yellow leaves glowing under sunset light.",
                    "reference": "https://images.unsplash.com/photo-1635622148305-175cca601680?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                },
                "author": {
                    "name": "Marcus Chen"
                },
                "content": "Caught the golden hour light hitting the autumn leaves in Central Park today. Nature's color palette is unmatched.",
                "post_id": 7,
                "creation_time": "2026-10-25T18:05:22Z",
                "likes": 0
            },
            {
                "media": {
                    "alt_text": "A freshly baked artisan sourdough loaf sliced open.",
                    "reference": "https://images.unsplash.com/photo-1767065887348-6e76f3338c80?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                },
                "author": {
                    "name": "Liam Vance"
                },
                "content": "Sourdough Sunday batch #12. Finally got the ear and open crumb structure I've been chasing for months.",
                "post_id": 8,
                "creation_time": "2026-10-26T09:45:10Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Kato Hiroshi"
                },
                "content": "Quiet morning walk through Yanaka district. Tokyo's backstreets always offer a peaceful contrast to the neon lights.",
                "post_id": 9,
                "creation_time": "2026-10-26T10:40:55Z",
                "likes": 0
            },
            {
                "media": null,
                "author": {
                    "name": "Maya Lin"
                },
                "content": "Set up the star tracker last night. Captured the Orion Nebula away from city light pollution.",
                "post_id": 10,
                "creation_time": "2026-10-26T10:55:04Z",
                "likes": 0
            }
        ]
    },
    getters: {
        getPostById: (state) => (postId) => {
            return state.posts.find(post => post.post_id === postId)
        },
        getLikesForPost: (state, getters) => (postId) => {
            const post = getters.getPostById(postId)
            return post.likes
        }
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find(p => p.post_id === postId)
            if (post) {
                post.likes++
            }
        },
        resetLikes(state){
            for (const post of state.posts){
                post.likes=0;
            }
        }
    },
    actions: {
        likePost({commit}, postId) {
            commit('incrementLikes', postId)
        }
    }
})