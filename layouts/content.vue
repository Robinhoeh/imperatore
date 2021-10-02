<template>
  <div class="content-view tw-bg-black-default tw-text-white-default tw-px-5">
    <AppHeader :navItems="navItems" />
    <Nuxt />
    <!-- AppFooter -->
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      navItems: [
        {
          domain: ["music", "videos", "photography"]
        },
        {
          information: ["contact"]
        },
        {
          language: ["Eng"]
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
