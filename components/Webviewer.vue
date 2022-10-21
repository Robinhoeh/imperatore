<template>
  <div id="webviewer" ref="viewer"></div>
</template>

<script>
export default {
  name: "WebViewer",
  props: { path: String, url: String },
  mounted() {
    import("@pdftron/webviewer").then(() => {
      Webviewer(
        {
          path: "../webviewer",
          initialDoc: this.url // use "/static/ricardophotostory.pdf"
        },
        this.refs.viewer
      ).then(instance => {
        //   call api?
      });
    });
  }
};
</script>

<style></style>
