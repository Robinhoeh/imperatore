<template>
  <section
    class="multi-path tw-grid tw-grid-flow-col md:tw-grid-rows-none tw-grid-rows-3 tw-gap-0 tw-h-screen"
  >
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="tw-p-8 tw-text-center md:tw-flex md:tw-justify-center md:tw-items-center md:tw-flex-col md:tw-flex-1"
      :style="
        `background: url(${item.backgroundImage}) no-repeat center center`
      "
    >
      <nuxt-link :to="`/${item.pathName}`">
        <h4 class="tw-mb-4">{{ item.title }}</h4>
      </nuxt-link>
      <p>{{ item.description }}</p>
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
