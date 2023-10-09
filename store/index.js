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

      addPost(state, newPost) {
        state.loadedPosts.push(newPost)
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
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

      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }

        return this.$axios
          .post(
            'https://nuxt-blog-47a07-default-rtdb.firebaseio.com/posts.json',
            createdPost
          )
          .then((result) =>
            vuexContext.commit('addPost', {
              ...createdPost,
              id: result.data.name,
            })
          )
          .catch((e) => console.log(e))
      },

      editPost(vuexContext, post) {
        const editedPost = { ...post, updatedDate: new Date() }

        return this.$axios
          .put(
            'https://nuxt-blog-47a07-default-rtdb.firebaseio.com/posts/' +
              editedPost.id +
              '.json',
            editedPost
          )
          .then((result) => vuexContext.commit('editPost', editedPost))
          .catch((e) => console.log(e))
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
