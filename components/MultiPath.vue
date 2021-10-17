<template>
  <section
    class="multi-path tw-grid tw-grid-flow-col md:tw-grid-rows-none tw-grid-rows-3 tw-gap-0 tw-h-screen"
  >
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="tw-p-8 tw-flex tw-items-center tw-justify-center tw-text-center md:tw-flex md:tw-justify-center md:tw-items-center md:tw-flex-col md:tw-flex-1"
      :style="
        `background: linear-gradient(to right bottom, rgb(46,205,167), rgba(0, 0, 0, 0)), url(${item.backgroundImage}) no-repeat center center`
      "
    >
      <nuxt-link :to="`/${item.pathName}`">
        <div class="tw-max-w-[220px]">
          <h4 class="tw-mb-4 tw-text-dark-text">{{ item.title }}</h4>
          <p class="tw-text-dark-text">{{ item.description }}</p>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
