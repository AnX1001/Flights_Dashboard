import WidgetCard from './WidgetCard.tsx';

export default function UserInfo() {
  return (
    <WidgetCard
      logoSrc="./Person.svg"
      heading="Good morning, Kazuya!"
      imageAlt="image of a user"
      info="You are successfully logged in."
    />
  );
}
