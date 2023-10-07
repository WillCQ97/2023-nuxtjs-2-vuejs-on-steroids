<template>
  <div class="homepage">
    <section class="intro">
      <h1>Get the lastest tech news!</h1>
    </section>
    <section class="featured-posts">
      <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="
              background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraverseanywhere.files.wordpress.com%2F2020%2F07%2Ftechnology-watch.jpg&f=1&nofb=1&ipt=f8c750e3c3229431c54ba734a6504da44fdc4f5c3695062691c4d1a848af948c&ipo=images');
            "
          ></div>
          <div class="post-content">
            <h1>Post Title 1</h1>
            <p>Preview Text 1</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 2" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="
              background-image: url('https://www.aesc.org/sites/default/files/uploads/images/tech-og.jpg');
            "
          ></div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
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

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>