<template>
  <div class="music">
    <section class="music-links">
      <h2 class="tw-text-5xl lg:tw-text-[100px] tw-font-semibold tw-mb-16">
        Boteco Eletro
      </h2>
      <div></div>
    </section>
    <section class="biography-section">
      <h4 class="tw-border-b tw-pb-5 tw-max-w-[350px] lg:tw-text-5xl tw-mb-8">
        Biography
      </h4>
      <div
        class="md:tw-flex md:tw-items-start md:tw-justify-between tw-max-w-[992px]"
      >
        <div class="tw-pb-5 md:tw-w-6/12">
          <img
            src="~/assets/images/ricardo-bio-min.jpg"
            class="tw-w-full tw-max-w-[450px]"
            alt="pic of ricardo at bar smiling"
          />
        </div>
        <div class="md:tw-w-5/12">
          <p class="tw-mb-8">{{ biography.descriptionOne }}</p>
        </div>
      </div>
    </section>
    <section class="discography-section"></section>
  </div>
  <!-- Thanks for the free icons! -->
  <!-- <a href="https://iconscout.com/icons/spotify" target="_blank">Spotify Icon</a> by <a href="https://iconscout.com/contributors/alexandru-stoica">Alexandru Stoica</a> on <a href="https://iconscout.com">Iconscout</a> -->
</template>

<script>
export default {
  // Add prefered layout for each page
  layout: "content",
  data() {
    return {
      biography: {
        descriptionOne:
          "Brazilian, musician, producer, photographer, and activist could describe Ricardo Imperatore.  Like the work of multi-disciplinary artists of all sorts, each of Imperatore’s art practices influences the others.  His brand of documentary photography:  informal and playful, involved and passionate - reflects his music: electric, eclectic, personal and political... uniquely entertaining.  His work is wrapped around his love and loss relationship to Rio de Janeiro."
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
