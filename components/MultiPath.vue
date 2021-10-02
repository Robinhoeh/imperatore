<template>
  <section
    class="multi-path tw-grid tw-grid-flow-col md:tw-grid-rows-none tw-grid-rows-3 tw-gap-0 tw-h-screen"
  >
    <nuxt-link :to="`/:slug/${pages.id}`">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class=" tw-bg-music-pattern tw-bg-gradient-to-b tw-from-green-default tw-to-gray-300 tw-backdrop-filter tw-backdrop-opacity-30 tw-p-8 tw-text-center md:tw-flex md:tw-justify-center md:tw-items-center md:tw-flex-col md:tw-flex-1"
        :style="
          `background: url(${item.backgroundImage}) no-repeat center center`
        "
      >
        <h4 class="tw-mb-4">{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      pages: {
        id: "music"
      }
    };
  }
};
</script>

<style lang="scss"></style>
