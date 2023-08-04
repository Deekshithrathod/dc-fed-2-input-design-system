import "./NavPane.css";

const NavPane = () => {
  return (
    <div className="nav-pane">
      <div className="logo">
        <span>Design</span> Systems
      </div>
      <div className="options">
        <ul>
          <li>Colors</li>
          <li>Typpography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>
            <b>Inputs</b>
          </li>
          <li>Grid</li>
        </ul>
      </div>
    </div>
  );
};

export default NavPane;
