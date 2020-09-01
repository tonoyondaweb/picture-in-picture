const videoElement =  document.getElementById('video');
const btn = document.getElementById('button');

async function getMediaStream(){
    try {
        // Getting media source
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        // Play video on load
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        alert('Error here',error);
    }
}

// Button triggers PiP on click
btn.addEventListener('click', async () => {
    // Disable button on click
    btn.disabled = true;
    // Trigger PiP
    await videoElement.requestPictureInPicture();
    // Reset button state
    btn.disabled = false;
})

getMediaStream();