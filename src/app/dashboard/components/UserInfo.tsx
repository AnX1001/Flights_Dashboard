import WidgetCard from './WidgetCard.tsx';

export default function UserInfo() {
  return (
    <WidgetCard
      logoSrc="./Person.svg"
      heading="Good morning, An!"
      imageAlt="image of a user"
      info="You have successfully logged in."
    />
  );
}
