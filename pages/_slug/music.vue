<template>
  <div class="music">
    <section class="music-links tw-pb-32">
      <h2 class="tw-text-5xl lg:tw-text-[100px] tw-font-semibold tw-mb-2">
        Boteco Eletro
      </h2>
      <div>
        <div
          v-if="themeMode === 'light'"
          class="tw-flex tw-justify-between tw-max-w-sm tw-items-center"
        >
          <a
            href="https://open.spotify.com/artist/5rMbIlqzkwGfA1n9RAwgUE"
            target="_blank"
          >
            <SpotifyIconLight class="tw-w-7 md:tw-w-11" />
          </a>
          <a href="https://soundcloud.com/ricardoimperatore" target="_blank">
            <SoundCloudIconLight class="tw-w-7 md:tw-w-11" />
          </a>
          <a href="https://www.youtube.com/user/botecoeletro" target="_blank">
            <YoutubeIconLight class="tw-w-7 md:tw-w-11" />
          </a>
          <a href="https://www.facebook.com/ricardoimperatore" target="_blank">
            <FacebookIconLight class="tw-w-7 md:tw-w-11" />
          </a>
        </div>
        <div v-else>
          <SpotifyIconDark class="tw-w-7 md:tw-w-11" />
          <SoundCloudIconDark class="tw-w-7 md:tw-w-11" />
          <YoutubeIconDark class="tw-w-7 md:tw-w-11" />
          <FacebookIconDark class="tw-w-7 md:tw-w-11" />
        </div>
      </div>
    </section>
    <section class="biography-section">
      <h4 class="tw-border-b tw-pb-5 tw-max-w-[350px] lg:tw-text-5xl tw-mb-8">
        Biography
      </h4>
      <div
        class="md:tw-flex md:tw-items-start md:tw-justify-between tw-max-w-[992px]"
      >
        <div class="tw-pb-5 md:tw-w-6/12">
          <img
            src="~/assets/images/ricardo-bio-min.jpg"
            class="tw-w-full tw-max-w-[450px]"
            alt="pic of ricardo at bar smiling"
          />
        </div>
        <div class="md:tw-w-5/12">
          <p class="tw-mb-8">{{ biography.descriptionOne }}</p>
        </div>
      </div>
    </section>
    <section class="discography-section"></section>
  </div>
  <!-- Thanks for the free icons! -->
  <!-- <a href="https://iconscout.com/icons/spotify" target="_blank">Spotify Icon</a> by <a href="https://iconscout.com/contributors/alexandru-stoica">Alexandru Stoica</a> on <a href="https://iconscout.com">Iconscout</a> -->
</template>

<script>
import YoutubeIconLight from "@/assets/svgs/YoutubeIconLight";
import YoutubeIconDark from "@/assets/svgs/YoutubeIconDark";
import FacebookIconLight from "@/assets/svgs/FacebookIconLight";
import FacebookIconDark from "@/assets/svgs/FacebookIconDark";
import SpotifyIconLight from "@/assets/svgs/SpotifyIconLight";
import SpotifyIconDark from "@/assets/svgs/SpotifyIconDark";
import SoundCloudIconDark from "@/assets/svgs/SoundCloudIconDark";
import SoundCloudIconLight from "@/assets/svgs/SoundCloudIconLight";

export default {
  // Add prefered layout for each page
  layout: "content",
  components: {
    YoutubeIconLight,
    YoutubeIconDark,
    FacebookIconLight,
    FacebookIconDark,
    SoundCloudIconDark,
    SoundCloudIconLight,
    SpotifyIconDark,
    SpotifyIconLight
  },
  data() {
    return {
      themeMode: "light",
      biography: {
        descriptionOne:
          "Brazilian, musician, producer, photographer, and activist could describe Ricardo Imperatore.  Like the work of multi-disciplinary artists of all sorts, each of Imperatore’s art practices influences the others.  His brand of documentary photography:  informal and playful, involved and passionate - reflects his music: electric, eclectic, personal and political... uniquely entertaining.  His work is wrapped around his love and loss relationship to Rio de Janeiro."
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
