<template>
  <section class="post-list">
    <post-preview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraverseanywhere.files.wordpress.com%2F2020%2F07%2Ftechnology-watch.jpg&f=1&nofb=1&ipt=f8c750e3c3229431c54ba734a6504da44fdc4f5c3695062691c4d1a848af948c&ipo=images"
      title="Hello there"
      preview-text="This is my first post!"
    />
    <post-preview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.aesc.org/sites/default/files/uploads/images/tech-og.jpg"
      title="Some Ai Stuff"
      preview-text="Because its on mainstream!"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: { PostPreview },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>