import { toast } from "react-toastify"

/* eslint-disable no-restricted-globals */
const downloadImage = (full, name) => {
    fetch(full)
        .then((response) => response.blob())
        .then((blob) => {
            const downloadQuestion = confirm(
                "¿Do you want to download the image?"
            )

            if(downloadQuestion) {
                const url = window.URL.createObjectURL(blob)

                const a = document.createElement("a")
                a.href = url
                a.download = `${name}.jpg`
                a.click()

                window.URL.revokeObjectURL(url)
            } else {
                toast.warn("Download cancelled")
            }
        })
        .catch((error) => toast.error("Error to get the photo from Unsplash", error))
}

export default downloadImage