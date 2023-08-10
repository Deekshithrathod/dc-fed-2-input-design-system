import Input from "../Input/Input";
import "./DisplayArea.css";

const DisplayArea = () => {
  return (
    <article>
      <h1>Inputs</h1>
      <div className="buttons-display">
        <div className="button-set">
          <h3>Size</h3>
          <div className="button-row">
            <Input size="sm" />
            <Input size="md" />
          </div>
        </div>
        <div className="button-set">
          <h3>Label</h3>
          <div className="button-row">
            <Input label="Halo Wald" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Helper Text</h3>
          <div className="button-row">
            <Input helperText="Halo Wald" />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Full-Width</h3>
          <div className="button-row">
            <Input fullWidth />
            <Input />
          </div>
        </div>
        <div className="button-set">
          <h3>Multi-line</h3>
          <div className="button-row">
            <Input multiline />
            <Input multiline row={4} />
          </div>
        </div>
        <div className="button-set">
          <h3>Icons</h3>
          <div className="button-row">
            <Input startIcon />
            <Input endIcon />
          </div>
        </div>
        <div className="button-set">
          <h3>Error</h3>
          <div className="button-row">
            <Input error />
            <Input error helperText="Helo" />
            <Input endIcon />
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
