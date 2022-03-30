import {getOutput} from './data.js';
import {pictureBase} from './thumbnail.js';

const getGallery = () => {
  const photosInfo = getOutput(25);
  pictureBase(photosInfo);
};

export {getGallery};
