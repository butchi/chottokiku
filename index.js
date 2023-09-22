#!/usr/bin/env node
const inputTxt = process.argv[2] ? process.argv.slice(2).join(" ") : null

const headers = new Headers({ "Content-Type": "application/json" })

if (inputTxt == null) {
    console.log("使用例: ")
    console.log("chottokiku 黄金比の近似値は？")
} else {
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
}
