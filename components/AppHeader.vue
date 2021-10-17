<template>
  <header
    class="app-header dark:tw-text-dark-text tw-text-light-text tw-items-center tw-flex tw-justify-between xl:tw-flex xl:tw-justify-between tw-py-5 tw-mx-0 tw-border-b tw-mb-14"
  >
    <ul>
      <li>
        <nuxt-link to="/">
          Ricardo Imperatore
        </nuxt-link>
      </li>
    </ul>

    <ul class="xl:tw-flex xl:tw-justify-between xl:tw-w-[600px] tw-hidden">
      <li v-for="(item, index) in navItems" :key="index">
        <nuxt-link :to="`${item.routeName}`">
          {{ item.navName }}
        </nuxt-link>
      </li>
    </ul>
    <ul class="xl:tw-hidden tw-cursor-pointer">
      <li @click="toggleMenu">
        <MenuIconDark />
      </li>
    </ul>

    <!-- Mobile Menu -->
    <div
      class="xl:tw-hidden tw-flex-col tw-bg-green-default tw-text-black-default tw-p-24 tw-absolute tw--top-0 tw--bottom-0 tw--right-0 tw-left-0 tw-z-10 tw-justify-start tw-text-xl lg:tw-text-5xl"
      :class="[isMenuOpen ? 'tw-flex' : 'tw-hidden']"
    >
      <ul class="tw-relative">
        <li v-for="(item, index) in navItems" :key="index" class="tw-pb-5">
          <nuxt-link :to="`${item.routeName}`">
            {{ item.navName }}
          </nuxt-link>
        </li>
        <li
          class="tw-absolute tw--top-16 tw--right-16 tw-cursor-pointer"
          @click="toggleMenu"
        >
          <CloseIcon />
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import MoonDarkIcon from "@/assets/svgs/MoonDarkIcon";
import MoonLightIcon from "@/assets/svgs/MoonLightIcon";
import MenuIconDark from "@/assets/svgs/MenuIconDark.vue";
import CloseIcon from "@/assets/svgs/CloseIcon.vue";

export default {
  components: {
    MoonDarkIcon,
    MoonLightIcon,
    MenuIconDark,
    CloseIcon
  },
  props: {
    navItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isDarkMode: true,
      isMenuOpen: false
    };
  },
  methods: {
    toggleThemeMode() {
      document.documentElement.classList.toggle("dark");
      this.isDarkMode = !this.isDarkMode;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss"></style>
