<template>
  <div class="index">
    <MultiPath :categories="categories"></MultiPath>
  </div>
</template>

<script>
import MultiPath from "@/components/MultiPath.vue";
import MusicImg from "@/static/music.jpg";
import VideoImg from "@/static/video.png";
import PhotoImg from "@/static/gaze.jpg";
export default {
  components: {
    MultiPath
  },
  data() {
    return {
      categories: {
        music: {
          title: "Listen",
          description: "Check out my music",
          backgroundImage: MusicImg
        },
        video: {
          title: "Watch",
          description: "Check out some of my new productions",
          backgroundImage: VideoImg
        },
        photography: {
          title: "Gaze",
          description: "Take a look at my gallery",
          backgroundImage: PhotoImg
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
