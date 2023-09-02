console.log(chrome.runtime)
const global = chrome.runtime.getURL('../assets/explicit.png')
console.log(global)
const allImages = document.querySelectorAll('img')

for(let i=0;i<allImages.length;i++){
    console.log(allImages.length)
    const currentImage = allImages[i]
    const {width,height} = currentImage.parentNode.getBoundingClientRect()
    const censor = document.createElement('img')
    censor.src=global
    censor.srcset=global
    censor.style.width=`${width}px`
    censor.style.height=`${height}px`
    censor.onclick=()=>{
        censor.remove()
    }
    currentImage.parentNode.insertBefore(censor,currentImage)
    currentImage.insertAdjacentHTML('afterbegin',censor)
}

console.log(allImages)