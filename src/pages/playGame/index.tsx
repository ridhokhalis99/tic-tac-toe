import Field from "./field";
import TopBar from "./topBar";

interface playGameProps {
  setCurrentScreen: (screen: string) => void;
}

const PlayGame = (props: playGameProps) => {
  const { setCurrentScreen } = props;

  return (
    <div>
      <TopBar />
      <Field />
    </div>
  );
};

export default PlayGame;
