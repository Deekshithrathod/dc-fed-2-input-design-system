import "./DisplayArea.css";

const DisplayArea = () => {
  return (
    <article>
      <h1>Buttons</h1>
      <div className="buttons-display">
        <div className="button-set">
          <h3>Size: small</h3>
          <div className="button-row"></div>
        </div>

        <footer>
          created by <a href="https://github.com/Deekshithrathod">Deekshith</a>{" "}
          - Full Stack
        </footer>
      </div>
    </article>
  );
};

export default DisplayArea;
