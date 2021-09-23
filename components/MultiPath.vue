<template>
  <section class="multi-path tw-h-screen">
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="tw-flex tw-flex-col tw-items-center tw-p-8 tw-text-center tw-h-2/6"
      :style="`background: url(${item.backgroundImage})`"
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
