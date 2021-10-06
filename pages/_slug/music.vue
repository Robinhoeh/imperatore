<template>
  <div class="music">
    <section class="music-links">
      <h2 class="tw-text-5xl lg:tw-text-[100px] tw-font-semibold tw-mb-16">
        Boteco Eletro
      </h2>
    </section>
    <section class="biography-section">
      <h4 class="tw-border-b tw-pb-5 tw-max-w-[350px] lg:tw-text-5xl tw-mb-8">
        Biography
      </h4>
      <p class="tw-mb-8">{{ biography.descriptionOne }}</p>
      <p class="tw-mb-8">{{ biography.descriptionTwo }}</p>
      <p class="tw-mb-8">{{ biography.descriptionThree }}</p>
      <p class="tw-mb-8">{{ biography.descriptionFour }}</p>
      <p class="tw-mb-8">{{ biography.descriptionFive }}</p>
    </section>
    <section class="discography-section"></section>
  </div>
</template>

<script>
export default {
  // Add prefered layout for each page
  layout: "content",
  data() {
    return {
      biography: {
        descriptionOne:
          "Dj, composer, music producer, drummer, percussionist and performer. Ricardo Imperatore is part of a restricted group of Djs, who write, sing and play a unique repertoire that balance perfectly the fusion between Brazilian tropical mood and the most progressive electronic music.",
        descriptionTwo:
          "The first steps of Ricardo Imperatore in the music scene of Rio de Janeiro are as drummer and co-founder of Banda Bel, in 1984. The band mixed Samba and Rock in an explosive and unprecedented way until then and exploded in the Dance floors all over Brazil. This success held for a decade and until 1994 Band Bel was unanimously regarded as a group ahead of its time. It is after this period that Ricardo Imperatore begins his solo career, as a drummer/percussionist, in a new period filled with the same success as the previous one. From 1995 to 2000, Imperatore played or toured with artists such as Natalie Cole, Susan Vega, Man At Work, Midnight Oil, Marisa Monte, Titas, Tom Capone, Monobloco, Ivo Meirelles, Cassiano among many others.",
        descriptionThree:
          "It is after 2001 that Imperatore immerses in the world of electronic music, initiating the project BoTECOeletro. Being a professional percussionist, and an author deeply aware of the roots of Brazilian music, the project gave Imperatore a DJ style with a unique personality, like the great names of electronic music that as him, are authors and composers. The project, influenced by folk, erudite music, as well as popular and pop brazilian music, gave to BoTECOeletro the prize for best electronic album of 2005 at the Brazilian Music Awards (the Brazilian equivalent to the Grammys).",
        descriptionFour:
          "In 2012 Imperatore releases boTECOeletro Vol. 2, which was once again named best electronic album in the 2013 edition of the Brazilian Music Awards. The success of this album is undeniable, as demonstrated by the invitation to Imperatore to perform in the 2013 edition of Rock in Rio, before an audience of thousands of people in delirium.",
        descriptionFive:
          "Imperatore has already toured throughout Europe, USA, Latin America and Africa, in places like New York, London, Paris, Berlin, Hamburg, Barcelona, Vienna, Austria, Torino, Bologna, Amsterdam, Lisbon, Porto, Copenhagen, Antwerp, Lichenstein, Mexico City, La Paz, São Paulo and Rio de Janeirp, among many other."
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
