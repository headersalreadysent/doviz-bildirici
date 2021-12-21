const googleTTS = require('google-tts-api');
const fetch = require('nodejs-fetch')
const { execSync } = require('child_process');
const { writeFileSync, unlinkSync } = require('fs')
const { join } = require('path')
const { tmpdir } = require('os')
// get base64 text
const getData = () => {

	fetch("https://kur.doviz.com/api/v5/converterItems", {
		"headers": {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9,tr;q=0.8",
			"authorization": "Basic aed6daa66f3f9539dbce2f01d0c968347f3388dec02d472917fd6d1f9b81c153",
			"cache-control": "no-cache",
			"pragma": "no-cache",
			"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Linux\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-requested-with": "XMLHttpRequest",
			"cookie": "_ga=GA1.2.817032470.1605700180; custom-header-tooltip=hidden; cookie-disclaimer=1",
			"Referer": "https://kur.doviz.com/serbest-piyasa/amerikan-dolari",
			"Referrer-Policy": "strict-origin-when-cross-origin"
		},
		"body": null,
		"method": "GET"
	}).then(async (response) => {
		let json = await response.json();
		for (let i in json[0]) {
			let element = json[0][i];
			if (element.code == 'USD') {
				let ratio = element.buying;
				let text = (ratio + "").split('.');
				let tl = text[0];
				let kurus = text[1].substring(0, 2);
				talk('Dolar ' + tl + ' lira ' + kurus + ' kuruş')
				break;
			}
		}

	});
}
let talk = (text) => {
	googleTTS
		.getAllAudioBase64(text, {
			lang: 'tr',
			slow: false,
			host: 'https://translate.google.com',
			timeout: 10000,
		})
		.then((data) => {
			let now = new Date().getTime();
			let path = join(tmpdir(), now + '.mp3');
			writeFileSync(path, data[0].base64, { encoding: 'base64' })
			execSync('play -t mp3 ' + path + ' >/dev/null 2>&1');
			unlinkSync(path)
		}) // base64 text
		.catch(console.error);
}
getData()
setInterval(getData, 1 * 60 * 1e3)