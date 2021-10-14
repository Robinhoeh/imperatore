<template>
  <div class="gallery-card">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-2">
      <slot name="description"></slot>
      <slot name="card-number"></slot>
    </div>
    <div>
      <slot name="video"></slot>
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
