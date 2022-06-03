<template>
  <div class="gallery-item">
    <div v-if="preview">
      <div class="gallery-item__wrapper">
        <div :data-poster="preview" :data-html="`#video${index}`">
          <img alt="preview" class="gallery-item__img" :src="preview" />
        </div>
      </div>
    </div>
    <div v-else>
      <img alt="user" :src="url" class="gallery-item__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryItem",

  props: {
    url: {
      type: String,
      default: "",
    },
    isPrivate: {
      type: Boolean,
      required: true,
    },

    preview: {
      default: false,
    },

    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.gallery-item {
  cursor: pointer;

  &__wrapper {
    position: relative;
  }
  &__img {
    width: 100%;
    height: auto;
  }
}
</style>
