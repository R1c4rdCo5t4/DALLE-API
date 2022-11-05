// import { Configuration, OpenAIApi } from "/node_modules/openai"


// browserify main.js -o out.js

const { Configuration, OpenAIApi } = require("openai")

let generateImageRequest = async () => {


    document.getElementById("prompt-img").src = ""
    const prompt = document.getElementById("prompt").value;
    const token = document.getElementById("token").value;


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
    document.getElementById("prompt-img").alt = prompt
    
    document.getElementById("download-link").href = image_url;
 
    
    
    
}

document.getElementById("prompt-submit").addEventListener("click", generateImageRequest)

// function changeLink(id, link) {

//     var link = document.getElementById(id);

//     window.open(
//       link.href,
//       '_blank'
//     );

//     link.setAttribute('href', link);
// }
// changeLink("download-link", image_url)