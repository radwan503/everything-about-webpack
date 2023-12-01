import kiwi from './kiwi.jpg';
import './kiwi-image.scss';
class KiwiImage {
 render() {
  const img = document.createElement('img')
  img.src = kiwi;
  img.alt = 'kiwi';
  img.classList.add('kiwi-image');

  const bodyElement = document.querySelector('body');
  bodyElement.append(img)
 }
}

export default KiwiImage;