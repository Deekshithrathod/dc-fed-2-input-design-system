import React, { useState } from "react";

const Input = ({
  size = "md",
  label = "Label",
  helperText = "",
  placeHolder = "Placeholder",
  fullWidth = false,
  multiline = false,
  row = 1,
  startIcon = false,
  endIcon = false,
  error = false,
}: {
  size?: "md" | "sm";
  placeHolder?: string;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number;
  startIcon?: boolean;
  endIcon?: boolean;
  error?: boolean;
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = (e) => {
    setIsFocus(true);
  };

  const handleBlur = (e) => {
    setIsFocus(false);
  };

  const inputStyle = {
    fontFamily: `Noto Sans JP`,
    fontSize: `14px`,
    fontStyle: `normal`,
    fontWeight: 500,
    lineHeight: `normal`,

    borderRadius: `0.5rem`,
    border: `1px solid  ${getBorderColor(error, isHover, isFocus)}`,

    width: getWidth(fullWidth),
    height: getHeight(multiline, row),
    padding: getPadding(size, startIcon, endIcon),
  };

  const labelStyle = {
    color: `${getBorderColor(error, false, true)}`,
    fontFamily: `Noto Sans JP`,
    fontSize: `0.75rem`,
    fontWeight: `400`,
    marginBottom: `0.25rem`,
  };

  const containerStyle = {
    width: getWidth(fullWidth),
    display: "flex",
    flexDirection: "column" as `column`,
  };

  return (
    <div className="input-container" style={containerStyle}>
      <label htmlFor="d" style={labelStyle}>
        {label}
      </label>
      {/* {startIcon && <span className="material-symbols-outlined">call</span>} */}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        type="text"
        placeholder={placeHolder}
        style={inputStyle}
      />
      {/* {endIcon && <span className="material-symbols-outlined">lock</span>} */}
      {helperText && (
        <div style={{ ...labelStyle, marginTop: `.25rem` }}>{helperText}</div>
      )}
    </div>
  );
};

const getPadding = (
  size: string,
  startIcon: boolean,
  endIcon: boolean
): string => {
  console.log(`used GetPadding with ${size === "sm"}`);

  let factor = 18;
  if (size === "sm") {
    factor = 10;
  }

  let leftPadding = startIcon ? 3 : 0.75;
  let rightPadding = endIcon ? 3 : 0.75;

  const finalString = `${factor}px ${rightPadding}rem  ${factor}px ${leftPadding}rem`;
  console.log(finalString);
  return finalString;
};

const getBorderColor = (error: boolean, isHover: boolean, isFocus: boolean) => {
  if (error) {
    return isHover ? `#333333` : `#D32F2F`;
    // return `yellow`;
  }
  if (isHover) {
    return `#333`;
  }
  return `#828282`;
};

const getWidth = (fullWidth: boolean): string => {
  return fullWidth ? `100%` : `12.5rem`;
};

const getHeight = (multiline: boolean, row: number) => {
  let height = 1;
  if (multiline) {
    height = row;
  }
  return `${height}rem`;
};

export default Input;
