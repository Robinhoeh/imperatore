<template>
  <div class="video">
    <section class="music-videos tw-pb-24">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[420px] sm:tw-text-5xl tw-mb-8"
      >
        Videos
      </h4>
      <div class="tw-mb-14">
        <GalleryCard v-for="content in galleryContent" :key="content.id">
          <template #description>
            <h5>{{ content.description }}</h5>
          </template>
          <template #card-number>
            <h4 class="tw-font-semibold md:tw-text-[60px]">
              {{ content.cardNumber }}
            </h4>
          </template>
          <template #video>
            <div>
              <lite-youtube
                videoid="WxerD1JlaZo"
                playlabel="Rock in Rio"
              ></lite-youtube>
            </div>
          </template>
          <template #title>
            <h2
              class="tw-mt-3 md:tw-mt-6 tw-font-semibold tw-text-2xl md:tw-text-[60px] lg:tw-text-[80px]"
            >
              {{ content.title }}
            </h2>
          </template>
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
      galleryContent: [
        {
          description: "boTECOeletro volume 2",
          title: "Rock in Rio",
          cardNumber: "01/",
          videoId: "WxerD1JlaZo",
          playLabel: "Rock in Rio",
          id: "1"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
