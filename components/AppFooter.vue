<template>
  <footer
    class="app-footer tw-flex xl:tw-flex tw-justify-between tw-py-5 tw-mx-0 tw-border-t tw-bottom-0"
  >
    <ul>
      <li class="tw-text-xs">Site by: Robin Watson</li>
    </ul>
    <ul v-if="!isContactPage">
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
  },
  computed: {
    isContactPage() {
      return this.$route.name === "contact";
    }
  }
};
</script>

<style lang="scss">
.app-footer {
  width: 94vw;
}
</style>
