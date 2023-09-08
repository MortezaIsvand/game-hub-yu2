interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
  const color =
    score >= 90
      ? "bg-green-200"
      : score >= 80
      ? "bg-yellow-200"
      : "bg-gray-200";
  return <span className={`${color} font-bold px-2 rounded-md`}>{score}</span>;
};
export default CriticScore;
