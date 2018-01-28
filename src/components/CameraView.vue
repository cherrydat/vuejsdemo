<template>
    <div class="camera-modal">
        <video id="videoTab" ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <span @click="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
        </div>
        <canvas id="canvasTab"></canvas>
        <div class="output">
            <img id="photo" alt="The screen capture will appear in this box.">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      mediaStream: null,
      width : 300,
      height : 0,
      video: document.getElementById('videoTab'),
      canvas: document.getElementById('canvasTab'),
      streaming: false
    };
  },
  methods: {
    capture() {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      return imageCapture.takePhoto().then(blob => {
        console.log(blob);
      });
    }
  },
  mounted() {
    // this.video.addEventListener('canplay', function(ev){
    //   if (!streaming) {
    //     this.height = this.video.videoHeight / (this.video.videoWidth/this.width);
      
    //     this.video.setAttribute('width', width);
    //     this.video.setAttribute('height', height);
    //     this.canvas.setAttribute('width', width);
    //     this.canvas.setAttribute('height', height);
    //     this.streaming = true;
    //   }
    // }, false);

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(mediaStream => {
        this.mediaStream = mediaStream;
        this.$refs.video.srcObject = mediaStream;
        this.$refs.video.play();
      })
      .catch(error => console.error("getUserMedia() error:", error));
  },
  destroyed() {
    console.log("destroyed");
    const tracks = this.mediaStream.getTracks();
    tracks.map(track => track.stop());
  }
};
</script>

<style scoped>
.camera-modal {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: white;
  z-index: 10;
}
.camera-stream {
  width: 100%;
  max-height: 100%;
}

.take-picture-button {
  display: flex;
}

.camera-modal-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  margin-bottom: 24px;
}
.take-picture-button {
  display: flex;
}
</style>