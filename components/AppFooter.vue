<template>
  <footer
    class="app-footer tw-flex tw-justify-around xl:tw-flex xl:tw-justify-between tw-py-5 tw-mx-5 tw-border-t tw-mt-14 tw-absolute tw-bottom-0"
  >
    <ul>
      <li>Site by: Robin Watson</li>
    </ul>
    <ul>
      <li v-for="(info, index) in navItems[1].information" :key="index">
        {{ info }}
      </li>
    </ul>
  </footer>
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
