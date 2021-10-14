<template>
  <div
    class="gallery-card tw-mb-16 tw-mt-8 md:tw-mb-28 xl:tw-flex xl:tw-justify-between"
  >
    <div
      class="tw-flex tw-justify-between tw-items-center tw-mb-2 xl:tw-flex xl:tw-flex-col-reverse"
    >
      <slot name="description"></slot>
      <slot name="card-number"></slot>
    </div>
    <div>
      <slot name="video"></slot>
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
