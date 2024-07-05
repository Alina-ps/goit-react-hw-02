import s from "./Options.module.css";

const Options = ({ updateFeedback, total, reset, openModal }) => {
  return (
    <div className={s.optionsWrapper}>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("good");
          openModal();
        }}
      >
        Good
      </button>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("neutral");
          openModal();
        }}
      >
        Neutral
      </button>
      <button
        className={s.button}
        onClick={() => {
          updateFeedback("bad");
          openModal();
        }}
      >
        Bad
      </button>
      {total > 0 && (
        <button className={s.button} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
