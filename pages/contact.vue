<template>
  <div class="contact-page">
    <div>
      <h2
        class="tw-text-5xl lg:tw-text-[100px] tw-font-semibold tw-mb-24 lg:tw-mb-56 xl:tw-mb-80"
      >
        Get in touch
      </h2>
    </div>
    <div>
      <h3 class="tw-text-xs lg:tw-text-5xl xl:tw-ml-12 md:tw-mb-12">
        <a :href="`mailto:${contact.address}`" class="sm:hover:tw-shadow-lg">
          {{ contact.address }}
        </a>
      </h3>
      <ul
        class="tw-mt-10 md:tw-flex md:tw-justify-around md:tw-mt-60 lg:tw-mt-16 xl:tw-justify-end"
      >
        <li
          v-for="link in this.contactLinks"
          :key="link.id"
          class="tw-text-7xl xl:tw-ml-20"
        >
          <a :href="link.url" target="_blank" class="sm:hover:tw-shadow-lg">
            {{ link.shortForm.toLowerCase() }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "content",
  data() {
    return {
      contact: {
        address: "ricardoimperatore@me.com"
      },
      contactLinks: [
        {
          name: "spotify",
          url: "https://open.spotify.com/artist/5rMbIlqzkwGfA1n9RAwgUE",
          shortForm: "Sp",
          id: 1
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/ricardoimperatore",
          shortForm: "Fb",
          id: 2
        },
        {
          name: "youtube",
          url: "https://www.youtube.com/user/botecoeletro",
          shortForm: "Yt",
          id: 3
        },
        {
          name: "soundcloud",
          url: "https://soundcloud.com/ricardoimperatore",
          shortForm: "Sc",
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
