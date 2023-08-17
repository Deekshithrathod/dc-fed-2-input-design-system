import Input from "../Input/Input";
import "./DisplayArea.css";

const DisplayArea = () => {
  return (
    <article>
      <h1>Inputs</h1>
      <div className="buttons-display">
        <div className="button-set">
          <h3>Default</h3>
          <div className="button-row">
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Error</h3>
          <div className="button-row">
            <Input error />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Disabled</h3>
          <div className="button-row">
            <Input disabled />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Helper Text</h3>
          <div className="button-row">
            <Input helperText="Hello World" error />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Start Icon</h3>
          <div className="button-row">
            <Input helperText="Hello World" startIcon="phone" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>End Icon</h3>
          <div className="button-row">
            <Input endIcon="accessible" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Value </h3>
          <div className="button-row">
            <Input value="Hello World" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Size </h3>
          <div className="button-row">
            <Input size="sm" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Full-Width </h3>
          <div className="button-row">
            <Input fullWidth />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Multi-Line</h3>
          <div className="button-row">
            <Input multiline row={4} />
            <Input />
          </div>
        </div>
        <footer>
          created by{" "}
          <b>
            <a href="https://github.com/Deekshithrathod">Deekshith</a>
          </b>{" "}
          - devChallenges.io
        </footer>
      </div>
    </article>
  );
};

export default DisplayArea;
