import {removeExt} from './utilities.js';

export default function App() {
	const inputImg = document.getElementById('inputImg');
	const rawImage = document.getElementById('rawImage');
	const croppedImg = document.getElementById('croppedImg');
	const cropBtn = document.getElementById('cropBtn');
	const downladBtn = document.getElementById('downloadBtn');
	const downloadLink = document.getElementById('downloadLink');
	let cropper;
	let imgName;

	cropBtn.style.display = 'none';
	downladBtn.style.display = 'none';

	inputImg.onchange = (evt) => {
		const file = evt.target.files[0];
		imgName = removeExt(file.name);
		const reader = new FileReader();
		reader.addEventListener('load', () => {
			rawImage.setAttribute('src', reader.result);
			cropper = new Cropper(rawImage, {
				aspectRatio: 0,
				viewMode: 0,
			});
			cropBtn.style.display = 'block';
		});
		if (file) reader.readAsDataURL(file);
	};

	cropBtn.onclick = () => {
		let crop = cropper.getCroppedCanvas().toDataURL('image/png');
		croppedImg.src = crop;
		downloadLink.download = imgName + '-cropped';
		downloadLink.href = crop;
		downladBtn.style.display = 'block';
	};
}
