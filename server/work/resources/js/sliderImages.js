const imageLinkInputs = document.querySelectorAll('.image-link-input')
const updatedImagesInput = document.querySelector('#updated_slider_images')

imageLinkInputs.forEach(item => {
    item.addEventListener('blur',(e) => {
        if(e.target.value !== e.target.dataset.value) {
            const splitSrc = e.target.previousElementSibling.src.split('/')
            const imageName = splitSrc[splitSrc.length-1]

            if(updatedImagesInput.value.includes(imageName)) return;
            updatedImagesInput.value = updatedImagesInput.value ? `${updatedImagesInput.value},${imageName}--${e.target.value}` : `${imageName}--${e.target.value}`
        }
    })
})