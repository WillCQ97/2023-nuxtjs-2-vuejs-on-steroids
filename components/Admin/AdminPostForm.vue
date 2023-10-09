<template>
  <form @submit.prevent="onSave">
    <app-control-input v-model="editedPost.author">
      Author Name
    </app-control-input>

    <app-control-input v-model="editedPost.title"> Title </app-control-input>

    <app-control-input v-model="editedPost.thumbnail">
      Thumbnail Link
    </app-control-input>

    <app-control-input v-model="editedPost.content" control-type="textarea">
      Content
    </app-control-input>

    <app-control-input v-model="editedPost.previewText" control-type="textarea">
      Preview Text
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
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  components: { AppButton, AppControlInput },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: '',
            title: '',
            thumbnail: '',
            content: '',
            previewText: '',
          },
    }
  },
  methods: {
    onSave() {
      // emite um evento chamado submit passando juntamente o post editado
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.$router.push('/admin')
    },
  },
}
</script>