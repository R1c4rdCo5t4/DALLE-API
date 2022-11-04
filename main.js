// import { Configuration, OpenAIApi } from "/node_modules/openai"

const { Configuration, OpenAIApi } = require("openai")


let generateImageRequest = async () => {
    const input = document.getElementById("prompt").value;

    const configuration = new Configuration({
        apiKey: "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",
    })
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
        prompt: input,
        n: 1,
        size: "512x512",
    })

    let image_url = response.data.data[0].url;

    document.getElementById("prompt-img").src = image_url
    document.getElementById("prompt-img").alt = input
}

document.getElementById("prompt-submit").addEventListener("click", generateImageRequest)