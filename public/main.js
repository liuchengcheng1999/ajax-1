let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/page2')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach((item) => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response)
            console.log(request.response)
            const bool = JSON.parse(request.response)
            console.log(typeof bool)
            console.log(bool)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response)
        // 创建script标签
        const script = document.createElement('script')
        // 编写style内容
        script.innerHTML = request.response
        // 插到body里
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css') // readstate = 1
    request.onreadystatechange = () => {
        request.onload = () => {
            if (request.status >= 200 && request.status < 300) {
                // 创建style标签
                const style = document.createElement('style')
                // 编写style内容
                style.innerHTML = request.response
                // 插到head面
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    }
    request.send() // readstate = 2
}