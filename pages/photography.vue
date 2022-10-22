<template>
  <div class="photography">
    <h2
      class="tw-text-2xl md:tw-text-[60px] lg:tw-text-[80px] tw-font-semibold tw-mb-2 md:tw-mb-5 lg:tw-mb-8"
    ></h2>

    <a href="/ricardophotostory.pdf" download="">
      <img
        src="~/assets/images/gamboa-dream.png"
        alt=""
        class="tw-max-h-80 xl:tw-max-h-96"
      />

      <p>Download:</p>
      <h3>Ricardo Imperatore</h3>
      <h4>"Gamboa's Dream</h4>
    </a>
  </div>
</template>

<script>
export default {
  // Add prefered layout for each page
  layout: "content"
};
</script>

<style lang="scss" scoped>
.pdf {
  border: 1px solid red;
  width: 100%;
  height: 100%;
}
</style>
