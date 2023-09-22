#!/usr/bin/env node
const inputTxt = process.argv.slice(2).join(" ")

const headers = new Headers({ "Content-Type": "application/json" })

const response = fetch("https://dvl677f2xu3n44xqpcolv64iwe0jbmyd.lambda-url.eu-north-1.on.aws/", {
    method: "POST",
    body: JSON.stringify({
        text: inputTxt,
    }),
    headers,
})

response.then(res => {
    res.json().then(json => {
        console.log(json)
    })
})