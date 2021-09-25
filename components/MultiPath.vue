<template>
  <section
    class="multi-path tw-grid tw-grid-flow-col tw-grid-rows-3 tw-gap-0 tw-h-screen"
  >
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="tw-p-8 tw-text-center "
      :style="
        `background: url(${item.backgroundImage}) no-repeat center center`
      "
    >
      <h4 class="tw-mb-4">{{ item.title }}</h4>
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
