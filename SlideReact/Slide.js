import React from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [ativo, setAtivo] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(ativo * width));
  }, [ativo]);

  function slidePrev() {
    if (ativo > 0) setAtivo(ativo - 1);
  }

  function slideNext() {
    if (ativo < slides.length - 1) setAtivo(ativo + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map(({ text, id }) => (
          <div className={styles.item} key={id}>
            {text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Prev</button>
        <button onClick={slideNext}>Next</button>
      </nav>
    </section>
  );
};

export default Slide;
