<template>
  <div class="photography">
    <h2
      class="tw-text-2xl md:tw-text-[60px] lg:tw-text-[80px] tw-font-semibold tw-mb-2 md:tw-mb-5 lg:tw-mb-8"
    >
      Coming Soon...
    </h2>
    <!-- <div>
      <embed
        src="/assets/pdf/ricardophotostory.pdf"
        width="1440px"
        height="900px"
      />
      <embed
        src="/static/ricardophotostory.pdf"
        width="1440px"
        height="900px"
      />
    </div> -->
  </div>
</template>

<script>
// import ricardoPdf from "@/assets/pdf/ricardophotostory";

export default {
  // Add prefered layout for each page
  layout: "content",
  components: {
    // ricardoPdf
  },
  data() {
    return {
      // pdfSrc: ricardoPdf
    };
  }
};
</script>

<style lang="scss" scoped>
.pdf {
  border: 1px solid red;
  width: 100%;
  height: 100%;
}
</style>
