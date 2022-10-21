<template>
  <div class="video">
    <section class="music-videos tw-pb-12">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[500px] lg:tw-text-5xl tw-mb-8"
      >
        Performances
      </h4>
      <div
        class="tw-mb-14 md:tw-grid md:tw-grid-cols-2 md:tw-gap-4 xl:tw-grid-cols-1"
      >
        <GalleryCard v-for="content in galleryContent" :key="content.id">
          <template #description>
            <h5>{{ content.description }} - {{ content.year }}</h5>
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
    <section class="art-videos tw-pb-12">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[500px] lg:tw-text-5xl tw-mb-8"
      >
        Video Art
      </h4>
      <div
        class="tw-mb-14 md:tw-grid md:tw-grid-cols-2 md:tw-gap-4 xl:tw-grid-cols-1"
      >
        <GalleryCard v-for="content in artVideos" :key="content.id">
          <template #description>
            <h5>
              {{ content.description }} - {{ content.subContent }}
              {{ content.year }}
            </h5>
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
    <section class="soundtrack-videos tw-pb-12">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[500px] lg:tw-text-5xl tw-mb-8"
      >
        Soundtracks/Trailers
      </h4>
      <div
        class="tw-mb-14 md:tw-grid md:tw-grid-cols-2 md:tw-gap-4 xl:tw-grid-cols-1"
      >
        <GalleryCard v-for="content in trailerContent" :key="content.id">
          <template #description>
            <h5>
              {{ content.description }} - {{ content.subContent }}
              {{ content.year }}
            </h5>
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
          description: "boTECOeletro",
          title: "Rock in Rio",
          cardNumber: "01/",
          videoId: "WxerD1JlaZo",
          playLabel: "Rock in Rio",
          year: "2013",
          id: "1"
        },
        {
          description: "Multiplicidade Festival",
          title: "Coco Nutz Mass",
          cardNumber: "02/",
          videoId: "yFCEUKfAwss",
          playLabel: "Oi Futuro Rio",
          year: "2006",
          id: "2"
        },
        {
          description: "boTECOeletro",
          title: "Paleo festival ",
          cardNumber: "03/",
          videoId: "aEAyKP5qKiw",
          playLabel: "Paleo festival",
          year: "2009",
          id: "3"
        }
      ],
      artVideos: [
        {
          description: "Ricardo imperatore",
          title: "The Leftovers",
          cardNumber: "04/",
          videoId: "ekp_63u5ZK4",
          playLabel: "The Leftovers",
          year: "2021",
          id: "4"
        },
        {
          description: "Ricardo imperatore",
          title: "Pandemic drums",
          cardNumber: "05/",
          videoId: "enODqUi-ivs",
          playLabel: "Planet ZYK",
          year: "2020",
          id: "5"
        },
        {
          description: "Ricardo imperatore",
          subContent: "Art exhibition - SESC Flamengo",
          title: "H20 - O FUTURO DAS ÁGUAS",
          cardNumber: "06/",
          videoId: "ezq5zx49nJE",
          playLabel: "h20",
          year: "2006",
          id: "6"
        }
      ],
      trailerContent: [
        {
          description: "Ricardo imperatore",
          subContent: "",
          title: "Favela Gay",
          cardNumber: "07/",
          videoId: "8PbjziTQKo8",
          playLabel: "favela gay",
          year: "2014",
          id: "7"
        },
        {
          description: "Ricardo imperatore",
          subContent: "",
          title: "Chacal Palavra Filme",
          cardNumber: "08/",
          videoId: "TfMSi8QiozE",
          playLabel: "Chacal Palavra Filme",
          year: "2015",
          id: "8"
        },
        {
          description: "Ricardo imperatore",
          subContent: "",
          title: "Album em Familia",
          cardNumber: "09/",
          videoId: "DwQ0f0ks7Q8",
          playLabel: "Album em Familia",
          year: "2021",
          id: "9"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
