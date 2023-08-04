import { useState } from "react";

const Input = ({
  label = "Label",
  error = false,
  size = "md",
  helperText = "",
  placeholder = "Placeholder",
}: {
  label?: string;
  error?: boolean;
  size?: "md" | "sm";
  helperText?: string;
  placeholder?: string;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const toggleFocus = () => {
    console.log(`focus changed...`);

    setIsFocus((prevState) => !prevState);
    console.log(getBorderColor(error, isHover, isFocus));
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const inputStyle = {
    border: `1px solid ${getBorderColor(error, isHover, isFocus)}`,
    // border: `1px solid pink`,
    padding: getPadding(size),
    borderRadius: `0.5rem`,
    width: "12.5rem",
  };

  const labelStyle = {
    color: getLabelColor(error, isHover, isFocus),
    fontFamily: "Noto Sans JP",
    fontWeight: 400,
    fontSize: "0.75rem",
    marginBottom: `4px`,
  };

  const heplerTextStyless = {
    // color: getLabelColor(isFocus),
    fontFamily: "Noto Sans JP",
    fontWeight: 400,
    fontSize: "0.75rem",
    marginTop: `4px`,
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="input-box">
      <label style={labelStyle}>
        {label}
        <input
          type="text"
          name="input"
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          style={inputStyle}
          placeholder={placeholder}
        />
      </label>
      {helperText && (
        <div className="helper-text" style={heplerTextStyless}>
          {helperText}
        </div>
      )}
    </div>
  );
};

const getPadding = (size: string): string => {
  return `${size === "md" ? "18px" : "10px"} 0.75rem`;
};

const getBorderColor = (
  error: boolean,
  isHover: boolean,
  isFocus: boolean
): string => {
  // console.log(`e: ${error}, h:${isHover}, f:${isFocus}`);
  // return
  if (isHover && !isFocus) {
    return "#333";
  }
  if (error) {
    return "#D32F2F";
  }
  if (isFocus) {
    return "yello";
    // return error ? "#2962FF" : "#D32F2F";
  }
  return "#828282";
};

const getLabelColor = (
  error: boolean,
  isHover: boolean,
  isFocus: boolean
): string => {
  if (isHover && !isFocus) {
    return "#333";
  }
  if (error) {
    return "#D32F2F";
  }
  if (isFocus) {
    return "#2962FF";
  }
  return "#333";
};

export default Input;
