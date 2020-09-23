const videoElement = document.getElementById('video');
const button= document.getElementById('button');


async function selectVideoStream(){
    try{
       const VideoStream= await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = VideoStream;
       videoElement.onloadedmetadata=()=>{
           videoElement.play();
       }
    }
    catch(error){
         console.log("Error Occured",error);
    }

}

button.addEventListener('click',async()=> {
    //Disabling the button 
    button.disabled = true;
    //Start the Pixc
    await videoElement.requestPictureInPicture();
    //Reset the button state
    button.disabled = false;

})

selectVideoStream();