<template>
  <div class="music">
    <section class="music-links tw-pb-24">
      <h2
        class="tw-text-2xl md:tw-text-[60px] lg:tw-text-[80px] tw-font-semibold tw-mb-2 md:tw-mb-5 lg:tw-mb-8"
      >
        Botecoeletro
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
            <SpotifyIconLight class="tw-w-8 md:tw-w-11" />
          </a>
          <a
            class="tw-w-8 md:tw-w-11"
            href="https://music.apple.com/us/artist/ricardo-imperatore/152783510"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0.524,20.91c0.65,1.42,1.738,2.353,3.234,2.802c0.42,0.127,0.856,0.187,1.293,0.228C5.606,23.993,6.161,24,6.718,24h11.03c0.525,0,1.048-0.034,1.57-0.1c0.823-0.106,1.597-0.35,2.296-0.81c0.84-0.553,1.472-1.287,1.88-2.208c0.186-0.42,0.293-0.87,0.37-1.324c0.113-0.675,0.138-1.358,0.137-2.04c-0.002-3.8,0-7.596-0.003-11.394h-0.003c0-0.738-0.065-1.47-0.24-2.19c-0.317-1.31-1.062-2.31-2.18-3.043C21,0.516,20.37,0.284,19.697,0.163c-0.517-0.093-1.038-0.135-1.564-0.15C18.093,0.01,18.05,0.003,18.009,0H5.986C5.834,0.01,5.683,0.017,5.531,0.026c-0.747,0.043-1.49,0.123-2.193,0.401c-1.336,0.53-2.3,1.452-2.865,2.78C0.281,3.655,0.181,4.132,0.11,4.615C0.054,5.007,0.022,5.4,0.01,5.795c0,0.032-0.007,0.062-0.01,0.093v12.224c0.01,0.14,0.017,0.283,0.027,0.424C0.077,19.352,0.181,20.161,0.524,20.91z M5.929,16.373c0.357-0.15,0.73-0.232,1.108-0.31c0.287-0.06,0.575-0.116,0.86-0.177c0.383-0.083,0.583-0.323,0.6-0.714v-0.15c0-2.96,0-5.922,0.002-8.883c0-0.123,0.013-0.25,0.042-0.37c0.07-0.285,0.273-0.448,0.546-0.518c0.255-0.066,0.515-0.112,0.774-0.165c0.733-0.15,1.466-0.296,2.2-0.444l2.27-0.46c0.67-0.134,1.34-0.27,2.01-0.403c0.22-0.043,0.443-0.088,0.664-0.106c0.31-0.025,0.523,0.17,0.554,0.482c0.008,0.073,0.012,0.148,0.012,0.223c0.002,1.91,0.002,3.822,0,5.732l0.001,0.003v5.713c0,0.417-0.058,0.827-0.244,1.206c-0.29,0.59-0.76,0.962-1.388,1.14c-0.35,0.1-0.706,0.157-1.07,0.173c-0.95,0.045-1.773-0.6-1.943-1.536c-0.142-0.773,0.227-1.624,1.038-2.022c0.323-0.16,0.67-0.25,1.018-0.324c0.378-0.082,0.758-0.153,1.134-0.24c0.274-0.063,0.457-0.23,0.51-0.516c0.014-0.063,0.02-0.13,0.02-0.193c0-1.815,0-3.63-0.002-5.443c0-0.062-0.01-0.125-0.026-0.185c-0.04-0.15-0.15-0.243-0.304-0.234c-0.16,0.01-0.318,0.035-0.475,0.066c-0.76,0.15-1.52,0.303-2.28,0.456l-3.7,0.748c-0.016,0.003-0.032,0.01-0.048,0.013c-0.277,0.077-0.377,0.203-0.39,0.49c-0.002,0.042,0,0.086,0,0.13c-0.002,2.602,0,5.204-0.003,7.806c0,0.42-0.047,0.836-0.215,1.227c-0.278,0.64-0.77,1.04-1.434,1.233c-0.35,0.1-0.71,0.16-1.075,0.172c-0.96,0.036-1.755-0.6-1.92-1.544C4.635,17.636,5.005,16.763,5.929,16.373z"
              />
            </svg>
          </a>
          <a href="https://soundcloud.com/ricardoimperatore" target="_blank">
            <SoundCloudIconLight class="tw-w-8 md:tw-w-11" />
          </a>
          <a href="https://www.youtube.com/user/botecoeletro" target="_blank">
            <YoutubeIconLight class="tw-w-8 md:tw-w-11" />
          </a>
          <a
            href="https://www.instagram.com/ricardo_imperatore/"
            target="_blank"
          >
            <InstaIconLight class="tw-w-8 md:tw-w-11" />
          </a>
          <a
            href="https://www.amazon.com/Ricardo-Imperatore/e/B001LHOQ3I/"
            target="_blank"
          >
            <AmazonIconLight class="tw-w-8 md:tw-w-11" />
          </a>
          <a href="https://www.deezer.com/it/artist/4570872" target="_blank">
            <Deezer class="tw-w-8 md:tw-w-11" />
          </a>
        </div>
        <div v-else>
          <SpotifyIconDark class="tw-w-8 md:tw-w-11" />
          <SoundCloudIconDark class="tw-w-8 md:tw-w-11" />
          <InstaIconDark class="tw-w-8 md:tw-w-11" />
          <FacebookIconDark class="tw-w-8 md:tw-w-11" />
          <AmazonIconDark class="tw-w-8 md:tw-w-11" />
          <AppleIconDark class="tw-w-8 md:tw-w-11" />
        </div>
      </div>
    </section>
    <section class="discography-section tw-mb-32">
      <h4
        class="tw-text-xl tw-border-b tw-pb-5 tw-max-w-[430px] sm:tw-text-5xl tw-mb-8"
      >
        Discography
      </h4>
      <div
        class="tw-mb-14 tw-flex tw-flex-col tw-items-center md:tw-grid md:tw-grid-cols-2 md:tw-gap-4 xl:tw-grid-cols-4"
      >
        <div
          class="tw-bg-center tw-mb-11 tw-flex tw-flex-col tw-items-center md:tw-items-start"
          v-for="album in discography"
          :key="album.id"
        >
          <div class="tw-flex tw-flex-col tw-min-h-[100px]">
            <h5 class="tw-mb-2">{{ album.title }}</h5>
            <h5 class="tw-mb-2" v-if="album.subTitle">{{ album.subTitle }}</h5>
            <h5 class="tw-mb-2" v-if="album.album">{{ album.album }}</h5>
            <h5 class="tw-mb-2" v-if="album.releaseDate">
              {{ album.releaseDate }}
            </h5>
          </div>
          <a :href="album.spotifyLink" target="_blank">
            <img
              :src="album.backgroundImg"
              alt=""
              class="tw-max-h-80 xl:tw-max-h-96"
            />
          </a>
        </div>
      </div>
    </section>

    <section class="biography-section tw-pb-32">
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
import InstaIconDark from "@/assets/svgs/InstaIconDark";
import InstaIconLight from "@/assets/svgs/InstaIconLight";
import AmazonIconDark from "@/assets/svgs/AmazonIconDark";
import AmazonIconLight from "@/assets/svgs/AmazonIconLight";
import Deezer from "@/assets/svgs/Deezer";

import Boteco1 from "@/assets/images/boteco-1.png";
import Boteco2 from "@/assets/images/boteco-2.png";
import Tubarao from "@/assets/images/remix-tubarao.png";
import Dona from "@/assets/images/remix-dona.png";

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
    SpotifyIconLight,
    InstaIconDark,
    InstaIconLight,
    AmazonIconDark,
    AmazonIconLight,
    Deezer
  },
  data() {
    return {
      themeMode: "light",
      discography: [
        {
          title: "Dona Ontete",
          subTitle: "Imperatore Remix",
          album: "Mexe Mexe",
          backgroundImg: Dona,
          releaseDate: "2020",
          spotifyLink:
            "https://open.spotify.com/track/7ylgplJpJgpdxGrvBQQPPV?si=3cde3787593f4abf",
          id: 1
        },
        {
          title: "Festa da Tubarao",
          subTitle: "Remix",
          backgroundImg: Tubarao,
          releaseDate: "2019",
          spotifyLink:
            "https://open.spotify.com/track/1djUMs5HUoB2w3yOoBQgg9?si=761ad4ccb84f41d2",
          id: 2
        },
        {
          title: "Boteco Eletro 1",
          backgroundImg: Boteco1,
          releaseDate: "2004",
          spotifyLink:
            "https://open.spotify.com/album/3WojC86QGhmaAZaCD0dLWv?si=yfiBEOR5Sj-Wmk-oE755Fw&dl_branch=1",
          id: 3
        },
        {
          title: "Boteco Eletro vol.2",
          backgroundImg: Boteco2,
          releaseDate: "2012",
          spotifyLink:
            "https://open.spotify.com/album/0KGrzYGeBFb35KlL1RQXBB?si=_Q8ZpjmIRLqRoXLAQOdlPw&dl_branch=1",
          id: 4
        }
      ],
      biography: {
        descriptionOne:
          "Brazilian, musician, producer, photographer, and activist could describe Ricardo Imperatore.  Like the work of multi-disciplinary artists of all sorts, each of Imperatore’s art practices influences the others.  His brand of documentary photography:  informal and playful, involved and passionate - reflects his music: electric, eclectic, personal and political... uniquely entertaining.  His work is wrapped around his love and loss relationship to Rio de Janeiro."
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
