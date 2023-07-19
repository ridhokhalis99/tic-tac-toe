import styles from "./buttons.module.scss";
interface ButtonProps {
  children: string | React.ReactNode;
  type?: "primary" | "secondary";
  backgroundColor?: "yellow" | "blue" | "grey";
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
  const {
    backgroundColor = "grey",
    children,
    type = "secondary",
    className: classNameProps,
    onClick,
  } = props;

  const decideClassName = () => {
    switch (type) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
    }
  };

  const typeClassName = decideClassName();
  const className = `${typeClassName} ${
    styles[`bg-${type}-${backgroundColor}`]
  } ${classNameProps}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
