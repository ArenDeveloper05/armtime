const addDeleteEvent = (blockClass, files, clb) => {
    const deleteBtns = document.querySelectorAll(`${blockClass} .delete_btn`)
    if (!deleteBtns.length) return;
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            const fileElement = btn.parentElement.querySelector('[src]')
            const fileName = fileElement.dataset.name
            if (!files) {
                const fileSrc = fileElement.src
                const deletedFilesInputs = document.querySelectorAll('.file-hidden-input')
                console.log('fileSrc', fileSrc)
                deletedFilesInputs.forEach(item => {
                    if (fileSrc.includes(item.getAttribute('data-file-path'))) {
                        const fileName = fileSrc.slice(fileSrc.lastIndexOf('/') + 1)
                        item.value += `${item.value ? "," : ""}${fileName}`
                    }
                })
            } else {
                files = files.length > 1 ? [...files.slice(0, index), ...files.slice(index + 1)] : []
            }
            if(clb) clb(fileName)
            btn.parentElement.remove()
        })
    })
}

window.addEventListener('DOMContentLoaded', () => {
    addDeleteEvent('.product_image_block')
    addDeleteEvent('.product_video_block')
    addDeleteEvent('.slider_image_block')
})

const imagesTemplate = (url,name) => (`
            <div style="display: flex;flex-direction: column;background-color: #eee;justify-content: flex-end" class="product_image_block">
                <img
                    class="product_image product_file-item"
                    data-name=${name}
                    src=${url}
                    alt="example placeholder"
                    style="width: 300px;object-fit: contain" />
                <button type="button"
                    class="delete_btn"
                    style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">Delete</button>
            </div>
        `)

const sliderImagesTemplate = (url,name) => (
    `<div style="display: flex;flex-direction: column;background-color: #eee;justify-content: flex-end"
         class="slider_image_block"
    >
        <img
            class="product_image"
            data-name=${name}
            src=${url}
            alt="example placeholder"
            style="width: 300px;object-fit: contain"/>
        <input 
        type="text"
         name="links[]" 
         style="border: 1px solid #0c84ff;border-radius: 8px;margin: 5px 0"
         placeholder="url"
         >
        <button type="button"
                class="delete_btn"
                style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">
            Delete
        </button>
    </div>`
)

const videoTemplate = (url,name) => (`
            <div style="display: flex;flex-direction: column;background-color: #eee;justify-content: flex-end" class="product_video_block">
                <video width="320" height="240" controls class="product_file-item product_video">
                  <source src=${url} type="video/mp4" data-name=${name}>
                  Your browser does not support the video tag.
                </video>
                <button type="button"
                    class="delete_btn"
                    style="border: none;cursor: pointer;background-color: #ff0c0c;color:#fff;">Delete</button>
            </div>
        `)

const uploadFile = (inputId, containerId, itemBlockClass, template) => {
    const input = document.querySelector(inputId)
    const newFileList = new DataTransfer();

    if (!input) return;
    const container = document.querySelector(containerId)
    let files = []

    const renderImages = () => {
        // container.innerHTML = ''

        if (!files.length) return;
        files.forEach(item => {
            console.log('item',item)
            container.innerHTML += template(URL.createObjectURL(item),item.name.replaceAll(' ',"_"))
        })
    }


    input.addEventListener('change', (e) => {
        const filesArr = [...Array.from(input.files)]

        files = filesArr
        console.log('files',files)
        files.forEach((item, index) => {
            newFileList.items.add(input.files[index])
        })
        input.files = newFileList.files

        console.log('newFileList',newFileList.items)
        const deleteImage = (name) => {
            [...newFileList.files].forEach((item, index) => {
                if (name === item.name.replaceAll(' ',"_")) {
                    newFileList.items.remove(index)
                }
            })

            input.files = newFileList.files
        }

        renderImages()
        addDeleteEvent(itemBlockClass, files, deleteImage)
    })
}

uploadFile('#images_field', '#images_container', ".product_image_block", imagesTemplate)
uploadFile('#videos_field', '#videos_container', ".product_video_block", videoTemplate)
uploadFile('#slider_images_field', '#slider-images-block', ".slider_image_block", sliderImagesTemplate)
