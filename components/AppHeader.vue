<template>
  <header
    class="app-header dark:tw-text-dark-text tw-text-light-text tw-flex tw-justify-between xl:tw-flex xl:tw-justify-between tw-py-5 tw-mx-0 tw-border-b tw-mb-14"
  >
    <ul>
      <li>
        <nuxt-link to="/">
          Ricardo Imperatore
        </nuxt-link>
      </li>
    </ul>

    <ul
      class="xl:tw-flex xl:tw-justify-between xl:tw-w-80 tw-hidden sm:tw-flex sm:tw-w-[317px] sm:tw-justify-around"
    >
      <li v-for="(item, index) in navItems[0].domain" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul class="tw-hidden xl:tw-block">
      <li v-for="(info, index) in navItems[1].information" :key="index">
        {{ info }}
      </li>
    </ul>
    <ul class="xl:tw-flex tw-justify-around tw-items-center tw-w-20 tw-hidden">
      <!-- <li @click="toggleThemeMode" class="hover:cursor-pointer">
        <MoonDarkIcon v-if="isDarkMode" />
        <MoonLightIcon v-else />
      </li> -->
      <li v-for="(lang, index) in navItems[2].language" :key="index">
        {{ lang }}
      </li>
    </ul>
  </header>
</template>

<script>
import MoonDarkIcon from "@/assets/svgs/MoonDarkIcon";
import MoonLightIcon from "@/assets/svgs/MoonLightIcon";

export default {
  components: {
    MoonDarkIcon,
    MoonLightIcon
  },
  props: {
    navItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    toggleThemeMode() {
      document.documentElement.classList.toggle("dark");
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>

<style lang="scss"></style>
