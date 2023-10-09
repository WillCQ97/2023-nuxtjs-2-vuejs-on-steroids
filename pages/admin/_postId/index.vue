<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  components: { AdminPostForm },

  layout: 'admin',

  asyncData(context) {
    return context.$axios
      .get(
        'https://nuxt-blog-47a07-default-rtdb.firebaseio.com/posts/' +
          context.params.postId +
          '.json'
      )
      .then((res) => {
        return { loadedPost: { ...res.data, id: context.params.postId } }
      })
      .catch((e) => context.error(e))
  },

  methods: {
    onSubmitted(editedPost) {
      // atualizar os dados do post
      this.$store
        .dispatch('editPost', editedPost)
        .then(() => this.$router.push('/admin'))
    },
  },
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>