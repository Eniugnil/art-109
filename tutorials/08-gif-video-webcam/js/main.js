const hoverVideos = document.querySelectorAll(".hover-video")
const clickVideo = document.querySelectorAll(".click-video")

hoverVideos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play()
    })
    video.addEventListener("mouseleave", () => {
        video.pause()
    })
})

clickVideo.forEach(video => {
    video.addEventListener("click", () => {
        video.play()
    })

})