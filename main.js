"use strict"

import AutoData from "./AutoData.js"
var auto = new AutoData()

const restType = document.getElementById("restType")
const endPoint = document.getElementById("endPoint")
const sendButton = document.getElementById("sendButton")
const sendBody = document.getElementById("sendBody")
const sendHeaders = document.getElementById("sendHeaders")

const result = document.getElementById("result")

endPoint.addEventListener("keypress", (e) => e.key == "Enter" ? executeRequest() : "")

sendButton.addEventListener("click", () => {
    result.innerHTML = "Please wait ..."
    auto.Save()
    executeRequest()
})

function executeRequest() {
    if (endPoint.value == "")
    {
        result.innerHTML = "Invalid request. Request URL EndPoint required."
        return
    }

    let xhr = new XMLHttpRequest()
    xhr.onload = (response) => {
        const status = `Status: ${response.currentTarget.status}<br>`
        const statusText = response.currentTarget.statusText != "" ? `Status Text: ${response.currentTarget.statusText}<br>` : ""
        const timeOut = `Timeout: ${response.currentTarget.timeout}<br><br>`
        const prettyResponse = JSON.stringify(JSON.parse(response.currentTarget.responseText), undefined, 4)
        const responseText = response.currentTarget.responseText != "" ? `Response Text: <pre>${prettyResponse}</pre>` : ""

        result.innerHTML = status + statusText + timeOut + responseText
        sendBody.style.height = ""
    } 
    xhr.onerror = (err) => {
        result.innerText = `Status: ${err.currentTarget.status}\n\n${err.currentTarget.response}`
    }
    
    xhr.open(restType.value, endPoint.value)

    try {
        let headers = JSON.parse(sendHeaders.value)
        for(let x in headers)
            xhr.setRequestHeader(x, headers[x])        
    } catch (error) {
        
    }
    
    if (sendBody.value != "")
        xhr.send(sendBody.value)
    else
        xhr.send()
}

window.addEventListener("beforeunload", () => auto.Save())
window.addEventListener("load", () => {
    auto.Load()
    sendBody.style.height = (sendBody.scrollHeight + 2) + "px"
    sendHeaders.style.height = (sendHeaders.scrollHeight + 2) + "px"
})

sendBody.addEventListener("blur", (e) => {    
    let ugly = e.target.value
    if (ugly == "")
    {
        e.target.style.height = ""
        return
    }
    try {
        let parsed = JSON.parse(ugly)    
        let pretty = JSON.stringify(parsed, undefined, 4)
        e.target.value = pretty
        e.target.style.height = (e.target.scrollHeight + 2) + "px"
    } catch {}
})

sendHeaders.addEventListener("blur", (e) => {    
    let ugly = e.target.value
    if (ugly == "")
    {
        e.target.style.height = ""
        return
    }
    try {
        let parsed = JSON.parse(ugly)    
        let pretty = JSON.stringify(parsed, undefined, 4)
        e.target.value = pretty
        e.target.style.height = (e.target.scrollHeight + 2) + "px"
    } catch {}
})
