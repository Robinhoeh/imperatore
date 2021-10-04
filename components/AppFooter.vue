<template>
  <footer
    class="app-footer tw-flex xl:tw-flex tw-justify-between tw-py-5 tw-mx-5 tw-border-t tw-absolute tw-bottom-0"
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

<style lang="scss">
.app-footer {
  width: 94vw;
}
</style>
