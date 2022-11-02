import React from "react";

const Home = ({ word, word2 }) => {
  return (
    <>
      <section className="home">
        <div>
          <h2>{word}</h2>
          {word2 && <h3>{word2}</h3>}
        </div>
      </section>
    </>
  );
};

export default Home;
