import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = children.substring(0, limit);
  return (
    <p>
      {expanded ? children : summary + "... "}
      <button onClick={() => setExpanded(!expanded)} className="bg-black px-2 p-1 ml-2 text-xs text-white rounded-md">
        {expanded ? "Show less" : "Read more"}
      </button>
    </p>
  );
};
export default ExpandableText;
