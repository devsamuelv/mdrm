import { FunctionComponent } from "react";
import { useDRM } from "./drm";

export const test: FunctionComponent = () => {
	const { DRMImage } = useDRM();

	return (
		<div>
			<DRMImage className="" src="helllo" />
		</div>
	);
};
