<template>
  <div class="video">
    <section class="music-videos tw-pb-24">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[420px] lg:tw-text-5xl tw-mb-8"
      >
        Videos
      </h4>
      <div
        class="tw-mb-14 md:tw-grid md:tw-grid-cols-2 md:tw-gap-4 xl:tw-grid-cols-1"
      >
        <GalleryCard v-for="content in galleryContent" :key="content.id">
          <template #description>
            <h5>{{ content.description }}</h5>
          </template>
          <template #card-number>
            <h4
              class="tw-font-semibold lg:tw-text-[60px] xl:tw-transform xl:tw--rotate-90 xl:tw-self-start xl:tw-absolute xl:tw--left-3"
            >
              {{ content.cardNumber }}
            </h4>
          </template>
          <template #video>
            <div>
              <lite-youtube
                :videoid="content.videoId"
                :playlabel="content.playLabel"
              ></lite-youtube>
            </div>
          </template>
          <template #title>
            <h2
              class="tw-mt-3 lg:tw-mt-8 tw-font-semibold tw-text-2xl lg:tw-text-[60px] tw-leading-tight"
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
        },
        {
          description: "boTECOeletro",
          title: "Coconutzmass",
          cardNumber: "02/",
          videoId: "yFCEUKfAwss",
          playLabel: "Oi Futuro Rio",
          id: "2"
          // https://youtu.be/yFCEUKfAwss
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
