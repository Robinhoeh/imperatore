<template>
  <div class="index tw-h-screen tw-flex-grow">
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
        video: {
          title: "Watch",
          description: "Check out some of my new productions",
          backgroundImage: VideoImg,
          id: "video",
          pathName: "video"
        },
        music: {
          title: "Listen",
          description: "Check out my music",
          backgroundImage: MusicImg,
          id: "music",
          pathName: "music"
        },
        photography: {
          title: "Gaze",
          description: "Take a look at my gallery",
          backgroundImage: PhotoImg,
          id: "photography",
          pathName: "photography"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped></style>
