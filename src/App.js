import React, { useState } from "react";
import data from "./data";
import { BiError } from "react-icons/bi";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setError(false);
    if (count < 0) {
      amount = 1;
      setError(false);
    }
    if (count <= 0) {
      amount = 0;
      setError(true);
    }
    if (count > data.length) {
      amount = 8;
      setError(false);
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired Of boring lorem-ipsum ?</h3>
      <h4>Generate 1-{data.length - 1} paragraph max</h4>
      <form className="lorem-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs :</label>
        <input
          type="text"
          name="amount"
          id="amount"
          autoFocus
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p id={index}>{item}</p>;
        })}
        <p>
          {error && <BiError />}
          <b style={{ color: "red" }}>
            {error ? `Generate Para 1-${data.length - 1} only` : ""}
          </b>
        </p>
      </article>
    </section>
  );
}

export default App;
