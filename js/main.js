import {getOutput} from './data.js';
import {createPhotoTemplate} from './thumbnail';

const photosInfo = getOutput();
createPhotoTemplate(photosInfo);
