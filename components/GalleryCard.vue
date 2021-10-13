<template>
  <div class="gallery-card">
    <div>
      <slot name="description"></slot>
    </div>
    <div>
      <slot name="card-number"></slot>
    </div>
    <div>
      <slot name="image"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryCard"
};
</script>

<style lang="scss"></style>
