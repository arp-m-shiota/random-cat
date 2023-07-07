type Props = {
  title: string;
  onClick?: () => void;
};
export const Button = (props: Props) => {
  const { title, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-teal-400 text-lg py-4 px-5 rounded-full"
    >
      {title}
    </button>
  );
};
