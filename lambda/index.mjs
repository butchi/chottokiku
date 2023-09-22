import OpenAI from "openai"

const apiKey = process.env.OPENAI_API_KEY

const openai = new OpenAI({
    apiKey,
})

export const handler = async evt => {
    const body = ((typeof evt.body) === "string") ? JSON.parse(evt.body) : evt.body
    const inputTxt = body?.text
    
    let resJson

    try {
        resJson = await openai.chat.completions.create({
            messages: [{
                role: "user",
                content: inputTxt,
            }],
            model: "gpt-4",
        })
    } catch (err) {
        const response = {
            statusCode: 500,
            body: err,
        }
        return response
    }

    const outputTxt = resJson?.choices?.[0]?.message?.content ?? ""

    const random = Math.random()
    const postTxt = random < 0.1 ?
        " ※本プログラムはサービスを永続的に保証するものではありません"
        : random < 0.3 ?
        " ※本コマンドは @butchi_y によるデモプログラムです。"
        : ""

    const response = {
        statusCode: 200,
        body: JSON.stringify(outputTxt + postTxt),
    }
    return response
}
