require("dotenv").config()

const OpenAI = require("openai")

let apiKey = process.env.OPENAI_API_KEY

const inputTxt = process.argv[2]

const openai = new OpenAI({
    apiKey
})

const response = openai.chat.completions.create({
    messages: [{
        role: "user",
        content: inputTxt,
    }],
    model: "gpt-4",
})

response.then(json => {
    const outputTxt = json?.choices?.[0].message?.content

    console.log(outputTxt)

    // console.info("※ 本プログラムはサービスの永続性を保証するものではありません")
})
