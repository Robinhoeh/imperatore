<template>
  <header
    class="app-header tw-flex tw-justify-around xl:tw-flex xl:tw-justify-between tw-py-5 tw-mx-5 tw-border-b tw-mb-14"
  >
    <ul>
      <li>Ricardo Imperatore</li>
    </ul>
    <ul class="xl:tw-flex xl:tw-justify-between xl:tw-w-80">
      <li v-for="(item, index) in navItems[0].domain" :key="index">
        {{ item }}
      </li>
    </ul>
    <ul>
      <li v-for="(info, index) in navItems[1].information" :key="index">
        {{ info }}
      </li>
    </ul>
    <ul class="tw-flex tw-justify-around tw-items-center tw-w-20">
      <li>
        <MoonDarkIcon />
      </li>
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
  }
};
</script>

<style lang="scss"></style>
