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

  middleware: ['check-auth','auth'],

  methods: {
    onSubmitted(postData) {
      // postData é o dado passado em this.$emit('submit', this.editedPost)
      this.$store
        .dispatch('addPost', postData)
        .then(() => this.$router.push('/admin'))
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