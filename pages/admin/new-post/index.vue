<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form @submit.prevent="onSave">
        <app-control-input v-model="editedPost.author">
          Author Name
        </app-control-input>

        <app-control-input v-model="editedPost.title"> Title </app-control-input>

        <app-control-input v-model="editedPost.thumbnailLink">
          Thumbnail Link
        </app-control-input>

        <app-control-input v-model="editedPost.content" control-type="textarea">
          Content
        </app-control-input>

        <app-button type="submit"> Save </app-button>

        <app-button
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
        >
          Cancel
        </app-button>
      </form>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  components: { AppButton, AppControlInput },
  data() {
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnailLink: '',
        content: '',
      },
    }
  },
  methods: {
    onSave() {
      // save the post
      console.log(this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>