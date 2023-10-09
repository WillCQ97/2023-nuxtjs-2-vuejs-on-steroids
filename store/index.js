import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios
          .get('https://nuxt-blog-47a07-default-rtdb.firebaseio.com/posts.json')
          .then((response) => {
            const postsArray = []
            for (const key in response.data) {
              postsArray.push({ ...response.data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch((e) => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore
