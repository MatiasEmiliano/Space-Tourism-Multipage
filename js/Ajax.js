function Ajax(url, container, cb){
    xhr = new XMLHttpRequest
    xhr.open('get', url)
    xhr.addEventListener('load', () => {
        if (xhr.status == 200) {
            container.innerHTML = xhr.response
            if (cb){cb()}
        }
    })
    xhr.send()
}