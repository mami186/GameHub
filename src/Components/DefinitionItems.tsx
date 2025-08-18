import type { ReactNode } from "react";

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}
const DefinitionItems = ({ term, children }: Props) => {
	return (
		<div>

            <dt className=" text-2xl font-bold">{term}</dt>
			<dd>{children}</dd>
		</div>
	);
};

export default DefinitionItems;
