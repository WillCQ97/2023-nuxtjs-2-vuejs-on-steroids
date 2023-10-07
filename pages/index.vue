<template>
  <div class="homepage">
    <section class="intro">
      <h1>Get the lastest tech news!</h1>
    </section>
    <post-list :posts="loadedPosts"></post-list>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList,
  },
  data() {
    return {
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
  },
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>