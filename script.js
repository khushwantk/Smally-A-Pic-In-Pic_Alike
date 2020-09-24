const videoElement = document.getElementById("video");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const selectBtn = document.getElementById("select");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    selectBtn.hidden = true;
    startBtn.hidden = false;
  } catch (error) {}
};

stopStreamedVideo = (videoElement) => {
  const mediaStream = videoElement.srcObject;
  const tracks = mediaStream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });
};

const startPIP = async () => {
  startBtn.hidden = true;
  stopBtn.hidden = false;
  await videoElement.requestPictureInPicture();
};

const stopPIP = () => {
  stopStreamedVideo(videoElement);
  stopBtn.hidden = true;
  selectBtn.hidden = false;

  document.exitPictureInPicture();
};

selectBtn.addEventListener("click", selectMediaStream);

startBtn.addEventListener("click", startPIP);

stopBtn.addEventListener("click", stopPIP);
