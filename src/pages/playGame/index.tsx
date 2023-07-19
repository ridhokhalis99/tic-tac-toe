import Field from "./field";

interface playGameProps {
  setCurrentScreen: (screen: string) => void;
}

const PlayGame = (props: playGameProps) => {
  const { setCurrentScreen } = props;

  return (
    <div>
      <Field />
    </div>
  );
};

export default PlayGame;
