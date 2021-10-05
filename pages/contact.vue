<template>
  <div class="contact-page">
    <div>
      <h2 class="tw-text-5xl lg:tw-text-[100px] tw-font-semibold">
        Get in touch
      </h2>
    </div>
    <div>
      <h3>{{ contact[0].address }}</h3>
      <ul>
        <li
          v-for="link in this.contactLinks"
          :key="link.id"
          class="tw-text-7xl"
        >
          {{ link.shortForm.toLowerCase() }}
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
      contact: [
        {
          address: "ricardoimperatore@me.com"
        }
      ],
      contactLinks: [
        {
          name: "twitter",
          shortForm: "Tw",
          id: 1
        },
        {
          name: "facebook",
          shortForm: "Fb",
          id: 2
        },
        {
          name: "youtube",
          shortForm: "Yt",
          id: 3
        },
        {
          name: "soundcloud",
          shortForm: "Sc",
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
