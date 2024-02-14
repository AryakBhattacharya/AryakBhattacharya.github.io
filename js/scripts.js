let isPopupOpen = false;

function openPopup(title, imageUrl, desc, videoUrl) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-image').src = imageUrl;
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup-desc').innerText = desc;

    const videoPlayer = document.getElementById('videoPlayer');
    console.log(videoUrl);
//   // Get the video URL from the query parameter
//   const urlParams = new URLSearchParams(window.location.search);
//   const videoUrl = urlParams.get('videoUrl');
if(videoUrl.length<2)
{
    document.getElementById('videoPlayer').style.display="none";
}

  if (videoUrl) {
    // Set the video source dynamically
    const source = document.createElement('source');
    source.src = decodeURIComponent(videoUrl);
    source.type = 'video/mp4';
    videoPlayer.appendChild(source);

    // // Adding an event listener to play the video when the page loads
    // videoPlayer.addEventListener('loadeddata', function () {
    //   videoPlayer.play();
    // });
  } else {
    console.error('Video URL not provided.');
  }

    isPopupOpen = true;  // Set the flag to true when the popup opens
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    isPopupOpen = false;
    console.log(videoUrl);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isPopupOpen) {
        closePopup();
    }
});

// Attach a click event listener to the popup content to prevent closing when clicked inside
document.getElementById('popup').addEventListener('click', function (event) {
    // Check if the clicked element is the close button or outside the popup content
    if (event.target.classList.contains('popup') && isPopupOpen) {
        closePopup();
    }
});