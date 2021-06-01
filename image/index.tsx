import { FunctionComponent } from "react";

type Props = {
	src: string;
	className: string;
};

export const image: FunctionComponent<Props> = ({ src, className }) => {
	return (
		<div>
			<img src={src} className={className} />
		</div>
	);
};
