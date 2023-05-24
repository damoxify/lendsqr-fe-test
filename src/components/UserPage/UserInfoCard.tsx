import './users.scss';

interface Card {
  image: string;
  text: string;
  figure: number;
}
const UserInfoCard = ({ image, text, figure }: Card) => {
  return (
    <article className="card">
      <img src={image} alt="avatar" />
      <p className="text-color2">{text}</p>
      <h3 className="text-color1">{figure.toLocaleString()}</h3>
    </article>
  );
};

export default UserInfoCard;