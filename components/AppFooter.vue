<template>
  <footer
    class="app-footer tw-flex xl:tw-flex tw-justify-between tw-py-5 tw-px-5 tw-border-t tw-bottom-0 tw-bg-light-background"
  >
    <ul>
      <li class="tw-text-xs">Made with ❤️ by: Robin Watson</li>
    </ul>
    <ul>
      <li>
        <nuxt-link to="/contact">
          contact
        </nuxt-link>
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
