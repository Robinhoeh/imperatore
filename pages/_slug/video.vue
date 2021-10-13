<template>
  <div class="video">
    <section class="music-videos tw-pb-24">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[420px] sm:tw-text-5xl tw-mb-8"
      >
        Videos
      </h4>
      <div class="tw-mb-14">
        <GalleryCard>
          <template #description> </template>
          <template #card-number> </template>
          <template #image> </template>
          <template #title> </template>
        </GalleryCard>
      </div>
    </section>
  </div>
</template>

<script>
import GalleryCard from "@/components/GalleryCard";

export default {
  components: { GalleryCard },
  // Add prefered layout for each page
  layout: "content",
  data() {
    return {
      galleryContent: [{}]
    };
  }
};
</script>

<style lang="scss" scoped></style>
