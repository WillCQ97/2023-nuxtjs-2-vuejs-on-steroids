<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
  components: { AdminPostForm },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Wiris Werneck',
        title: 'PHP is the best language of the world!',
        content: 'The title said it all!',
        thumbnailLink:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheguide000.files.wordpress.com%2F2017%2F08%2Fphp-logo.gif&f=1&nofb=1&ipt=aa4e327eb4972e51219f206a7abdcd04a5faf099834f1b86a34d98dedcbacc14&ipo=images',
      },
    }
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