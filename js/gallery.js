import {getOutput} from './data.js';
import {pictureBase} from './thumbnail.js';

// Создание миниатюр+фулсайз фото

const getGallery = () => {
  const photosInfo = getOutput(25);
  pictureBase(photosInfo);
};

export {getGallery};
