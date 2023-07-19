"use client";
import { useEffect, useRef } from "react";
import styles from "@/styles/pages/home.module.scss";
import { Shape } from "@/components/shapes";
import { Button } from "@/components/buttons";

interface HomeProps {
  setCurrentScreen: (screen: string) => void;
}

function animateText(textElement: HTMLElement | null) {
  if (!textElement || !textElement.textContent) {
    return;
  }

  textElement.innerHTML = textElement.textContent.replace(
    /\S/g,
    `<span class="${styles["wave-char"]} char">$&</span>`
  );

  const elements = textElement.getElementsByClassName("char");
  for (let i = 0; i < elements.length; i++) {
    (elements[i] as HTMLElement).style.animationDelay = `${i * 0.1}s`;
  }
}

const Home = (props: HomeProps) => {
  const { setCurrentScreen } = props;
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    animateText(textRef.current);
  }, []);

  const buttons = [
    { color: "yellow", text: "New Game", setScreen: "play_game" },
    { color: "blue", text: "Leaderboard", setScreen: "leaderboard" },
    { color: "grey", text: "My Account", setScreen: "my_account" },
  ];

  return (
    <main className={styles["main"]}>
      <div className={styles["shape-container"]}>
        <Shape name="cross" size={48} />
        <Shape name="circle" size={48} />
      </div>
      <div className={styles["title-container"]}>
        <h1
          className={`heading-l grey-text ${styles["wave-text"]}`}
          ref={textRef}
        >
          Tic Tac Toe
        </h1>
      </div>
      {buttons.map((button, i) => (
        <Button
          key={i}
          type="primary"
          backgroundColor={button.color as "yellow" | "blue" | "grey"}
          className="heading-s"
          onClick={() => setCurrentScreen(button.setScreen)}
        >
          {button.text}
        </Button>
      ))}
    </main>
  );
};

export default Home;
