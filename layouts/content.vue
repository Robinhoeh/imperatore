<template>
  <div class="content-view">
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
          language: ["Eng", "Port"]
        }
      ]
    };
  }
};
</script>

<style lang="scss"></style>
