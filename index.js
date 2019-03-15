const btn = document.querySelector('#btn');
const pound = document.querySelector('#coin');

btn.addEventListener('click', () => {
	const XHR = new XMLHttpRequest();

	XHR.onreadystatechange = () => {
		if (XHR.readyState === 4 && XHR.status === 200) {
			const gbp = '£' + JSON.parse(XHR.responseText).bpi.GBP.rate;
			pound.innerText = gbp;
		}
	};

	XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
	XHR.send();
});
