import {sayHello} from './utilities.js';

const doS = document.getElementById('do');

doS.onclick = (evt) => {
	const name = prompt('Enter your name plz: ');
	alert(sayHello(name || 'Stranger'));
};
