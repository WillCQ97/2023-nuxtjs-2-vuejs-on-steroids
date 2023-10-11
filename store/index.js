import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    /* STATE */

    state: {
      loadedPosts: [],
      token: null,
    },

    /* MUTATIONS */

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

      setToken(state, token) {
        state.token = token
      },

      clearToken(state) {
        state.token = null
      },
    },

    /* ACTIONS */

    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get('/posts.json')
          .then((data) => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('setPosts', postsArray)
          })
          .catch((e) => context.error(e))
      },

      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }

        return this.$axios
          .$post('/posts.json?auth=' + vuexContext.state.token, createdPost)
          .then((data) =>
            vuexContext.commit('addPost', {
              ...createdPost,
              id: data.name,
            })
          )
          .catch((e) => console.log(e))
      },

      editPost(vuexContext, post) {
        const editedPost = { ...post, updatedDate: new Date() }

        return this.$axios
          .$put(
            '/posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token,
            editedPost
          )
          .then((data) => vuexContext.commit('editPost', editedPost))
          .catch((e) => console.log(e))
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },

      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts'

        if (!authData.isLogin) {
          authUrl += ':signUp?key='
        } else {
          authUrl += ':signInWithPassword?key='
        }

        authUrl += process.env.fbAPIKey

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit('setToken', result.idToken)

            // saving on localStore on the browser
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + result.expiresIn * 1000
            )

            // saving on the cookie to pass it to the server
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + result.expiresIn * 1000
            )
          })
          .catch((e) => console.log(e))
      },

      initAuth(vuexContext, request) {
        let token
        let expirationDate

        if (request) {
          if (!request.headers.cookie) {
            return
          }

          const jwtCookie = request.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))

          if (!jwtCookie) {
            return
          }

          token = jwtCookie.split('=')[1]
          expirationDate = request.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        // the plus before expirationDate converts the string into a number
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          vuexContext.commit('clearToken')
          return
        }
        vuexContext.commit('setToken', token)
      },
    },

    /* GETTERS */

    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

export default createStore
