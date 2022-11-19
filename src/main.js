
// browserify main.js -o out.js to compile for browser

const { Configuration, OpenAIApi } = require("openai")

let generateImageRequest = async () => {

    const prompt = document.getElementById("prompt").value;
    const token = document.getElementById("token").value;
    document.getElementById("prompt-img").src = ""
    document.getElementById("prompt-img").alt = prompt


    const configuration = new Configuration({
        apiKey: token,
    })
    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
    })

    let image_url = response.data.data[0].url;

    document.getElementById("prompt-img").src = image_url
    document.getElementById("download-link").href = image_url;
   
}

document.getElementById("prompt-submit").addEventListener("click", generateImageRequest)
