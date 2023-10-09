<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  components: { AdminPostForm },
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      // postData é o dado passado em this.$emit('submit', this.editedPost)
      this.$axios
        .post(
          'https://nuxt-blog-47a07-default-rtdb.firebaseio.com/posts.json',
          { ...postData, updatedDate: new Date() }
        )
        .then((result) => console.log(result))
        .catch((e) => console.log(e))
    },
  },
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>