<template>
  <div
    class="app-header tw-flex tw-justify-around xl:tw-flex xl:tw-justify-between xl:tw-py-5 xl:tw-mx-5 xl:tw-border-b xl:tw-mb-14"
  >
    <ul>
      <li>Ricardo Imperatore</li>
    </ul>
    <ul class="xl:tw-flex xl:tw-justify-between xl:tw-w-96">
      <li v-for="(item, index) in navItems[0].domain" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(info, index) in navItems[1].information" :key="index">
        {{ info }}
      </li>
    </ul>
    <ul>
      <li v-for="(lang, index) in navItems[2].language" :key="index">
        {{ lang }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    navItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss"></style>
