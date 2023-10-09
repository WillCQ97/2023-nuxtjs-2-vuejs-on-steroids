<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      const myDataToBeReturned = {
        loadedPost: {
          id: '0696f357-001a-4cd9-b9c5-7a356b9be204',
          title: 'Hello there (ID: ' + context.route.params.id + ')',
          previewText: 'This is my first post!',
          author: 'Maximilian Schwarzmüller',
          updatedDate: new Date(),
          content:
            'Some dumy text which is definitely not the preview text though.',
          thumbnail:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraverseanywhere.files.wordpress.com%2F2020%2F07%2Ftechnology-watch.jpg&f=1&nofb=1&ipt=f8c750e3c3229431c54ba734a6504da44fdc4f5c3695062691c4d1a848af948c&ipo=images',
        },
      }
      // myDataToBeReturned = null;

      if (myDataToBeReturned) {
        resolve(myDataToBeReturned)
      } else {
        reject(new Error('myData was not founded!'))
      }
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(e)
      })
  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>