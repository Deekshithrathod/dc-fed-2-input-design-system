import { useState } from "react";

const Input = ({
  size = "md",
  label = "Label",
  placeholder = "Placeholder",
  fullWidth = false,
  error = false,
  helperText = "",
}: {
  size?: "sm" | "md";
  label?: string;
  helperText?: string;
  placeholder?: string;
  fullWidth?: boolean;
  error?: boolean;
}) => {
  const styles = {
    padding: getPadding(size),
    margin: getMargin(),
    width: fullWidth ? "100%" : "",
    border: getBorder(error),
    borderRadius: `0.5rem`,
  };

  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const labelStyle = {
    color: getLabelColor(isFocus),
  };

  return (
    <>
      <div className="label-text" style={labelStyle}>
        {label}
      </div>
      <label>
        <input
          type="text"
          style={styles}
          placeholder={placeholder}
          onClick={() => {
            setIsFocus(true);
          }}
        />
      </label>
      {helperText && (
        <div className="helper-text" style={labelStyle}>
          {helperText}
        </div>
      )}
    </>
  );
};

const getPadding = (size: string) => {
  return `${size === "md" ? "18px" : "10px"} 0.75rem`;
};

const getMargin = () => {
  return `0.25rem 0 0 0 `;
};

const getLabelColor = (isFocus: boolean) => {
  return isFocus ? "#2962FF" : "#333";
};

const getBorder = (error: boolean) => {
  return `1px solid ${error ? "#D32F2F" : "#828282"}`;
};

export default Input;
