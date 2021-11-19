<template>
  <div>
    <AppHeader :navItems="navItems" />
    <h3>{{ $t("hello") }}</h3>
    <div
      class="content-view dark:tw-bg-dark-default dark:tw-text-dark-text tw-bg-light-background tw-text-light-text tw-px-5 tw-pt-16"
    >
      <Nuxt />
    </div>
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
    };
  }
};
</script>
