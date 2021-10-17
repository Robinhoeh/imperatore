<template>
  <div
    class="content-view dark:tw-bg-dark-default dark:tw-text-dark-text tw-bg-light-background tw-text-light-text tw-px-5"
  >
    <AppHeader :navItems="navItems" />
    <Nuxt />
    <AppFooter :navItems="navItems" />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      navItems: [
        {
          routeName: "music",
          navName: "music"
        },
        {
          routeName: "video",
          navName: "video"
        },
        {
          routeName: "photography",
          navName: "photography"
        },
        {
          routeName: "contact",
          navName: "contact"
        }
      ]
      // navItems: [
      //   {
      //     domain: ["music", "videos", "photography"]
      //   },
      //   {
      //     information: ["contact"]
      //   },
      //   {
      //     language: ["Eng"]
      //   }
      // ]
    };
  }
};
</script>

<style lang="scss"></style>
