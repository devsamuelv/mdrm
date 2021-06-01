import { image } from "./image";
import { video } from "./video";

export const useDRM = () => {
	return {
		DRMImage: image,
		DRMVideo: video,
	};
};
