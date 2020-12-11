import { ReactNode } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  popup: {
    position: "absolute",
  },
});

interface Props {
  children: ReactNode;
  className?: string;
}

export const RelativeModal = (props: Props) => {
  const styles = useStyles();
  return (
    <div style={{ position: "relative" }}>
      <div className={`${styles.popup} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
};
