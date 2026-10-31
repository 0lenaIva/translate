document.addEventListener('DOMContentLoaded', () => {
    const inputBtn = document.querySelector("#input");
    const translateBtn = document.querySelector("#translateBtn");
    const outputDiv = document.querySelector("#output");

    const email = "olenapo6@gmail.com";

    async function translateText() {
        const text = inputBtn.value.trim();
        if (text === '') {
            outputDiv.innerText = "Введіть текст...";
            return;
        }
        const safeText = encodeURIComponent(text);
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;
        try {
            const response = await fetch(url);
            const textResponse = await response.text();
            console.log(textResponse)

            const data = JSON.parse(textResponse)

            if (data && data.responseData && data.responseData.translatedText) {
                outputDiv.innerText = data.responseData.translatedText
            } else {
                outputDiv.innerText = 'Не вдалось перекласти'
            }
        } catch (error) {
            console.log(error)
        }
    }


    translateBtn.addEventListener('click', translateText);



});