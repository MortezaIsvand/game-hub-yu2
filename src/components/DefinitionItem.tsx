import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <dl>
      <dt className="font-bold text-gray-700">{term}</dt>
      <dd className="flex flex-col">{children}</dd>
    </dl>
  );
};
export default DefinitionItem;
