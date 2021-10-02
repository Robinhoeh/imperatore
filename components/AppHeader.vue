<template>
  <div class="app-header">
    <ul>
      <li>Ricardo Imperatore</li>
    </ul>
    <ul>
      <li v-for="(item, index) in navItems" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
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

<style lang="scss"></style>
