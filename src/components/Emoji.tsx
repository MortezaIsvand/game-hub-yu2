import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import bullseye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: { src: string; alt: string } } = {
    3: { src: meh, alt: "Recommened" },
    4: { src: thumbsup, alt: "Popular" },
    5: { src: bullseye, alt: "Exceptional" },
  };
  return <img {...emojiMap[rating]} width={25}/>;
};
export default Emoji;
