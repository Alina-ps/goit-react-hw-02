import s from "./Options.module.css";

const Options = ({ updateFeedback, total, reset }) => {
  return (
    <div className={s.optionsWrapper}>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
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
