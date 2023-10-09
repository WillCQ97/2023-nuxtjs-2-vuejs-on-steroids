<template>
  <div class="posts-page">
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: { PostList },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      const postsData = {
        loadedPosts: [
          {
            id: '0696f357-001a-4cd9-b9c5-7a356b9be204',
            title: 'Hello there',
            previewText: 'This is my first post!',
            author: 'Maximilian Schwarzmüller',
            thumbnail:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraverseanywhere.files.wordpress.com%2F2020%2F07%2Ftechnology-watch.jpg&f=1&nofb=1&ipt=f8c750e3c3229431c54ba734a6504da44fdc4f5c3695062691c4d1a848af948c&ipo=images',
          },
          {
            id: 'ed23351f-60cf-4d1e-ba88-fd27d10e670b',
            title: 'Some Ai Stuff',
            previewText: 'Because its on mainstream!',
            author: 'Mário Novo CTO',
            thumbnail:
              'https://www.aesc.org/sites/default/files/uploads/images/tech-og.jpg',
          },
        ],
      }
      resolve(postsData)
    })
      .then((returnedData) => {
        return returnedData
      })
      .catch((e) => {
        context.error(e)
      })
    // return postsData
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
  },
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>