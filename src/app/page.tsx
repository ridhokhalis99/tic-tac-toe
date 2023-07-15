"use client";
import "@/styles/typography.scss";
import { Button } from "@/components/buttons";
import styles from "./page.module.scss";
import { Shape } from "@/components/shapes";
import { useRef, useEffect } from "react";

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

export default function Home() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    animateText(textRef.current);
  }, []);

  const buttons = [
    { color: "yellow", text: "New Game" },
    { color: "blue", text: "Leaderboard" },
    { color: "grey", text: "My Account" },
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
        >
          {button.text}
        </Button>
      ))}
    </main>
  );
}
