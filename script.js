document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input');
    const translateBtn =  document.querySelector('#translateBtn');
    const output = document.querySelector('#output');

    const email = 'olenapo6@gmail.com';

    async function translateText() {
        const text = input.value.trim();
        if (text === ''){
            output.innerText = 'Будь ласка, напишіть якийсь текст.';
            return;
        }
        const safeText = encodeURIComponent(text);
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        output.innerText = data.responseData.translatedText;
    }

    translateBtn.addEventListener('click', translateText);

    
});