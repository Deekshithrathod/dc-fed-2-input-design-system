import styled from "@emotion/styled";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";

type iconString =
  | ""
  | "tractor"
  | "phone"
  | "accessible"
  | "account"
  | "airline";

const Input = ({
  error = false,
  disabled = false,
  helperText = "",
  startIcon = "",
  endIcon = "",
  value = "",
  size = "md",
  fullWidth = false,
  multiline = false,
  row = 1,
}: {
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  startIcon?: iconString;
  endIcon?: iconString;
  value?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  multiline?: boolean;
  row?: number;
}) => {
  const [focus, setFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const StyledLabel = styled.label`
    color: ${getColor(isHover, focus, error)};
    font-size: 0.75rem;
  `;

  const StyledInput = styled.input`
    color: #333;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    height: ${getHeight(multiline, row)};
    padding-top:0;
    
    border: none;
    
    ::placeholder{
      color:  #828282;
    }

    :focus{
      outline: none;
    }

    :disabled{
      background-color: #F2F2F2;
    }
    `;

  const InputBox = styled.div`
    color: #828282;
    background-color: ${disabled ? `#F2F2F2` : ``};
    border-radius: 0.5rem;
    /* border: 1px solid ${focus ? `#2962FF` : `#828282`}; */
    border: 1px solid ${getColor(isHover, focus, error, disabled)};

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: ${`${size === "sm" ? "0.625rem" : "1.125rem"} 0.75rem`};

    :hover{
      border: 1px solid #333;
    }
  `;

  const StyledHelper = styled.div`
    color:  ${getColor(isHover, focus, error, disabled)};
    font-size: 10px;
  `;

  return (
    <div
      style={{
        fontFamily: "Noto Sans JP",
        fontStyle: `normal`,
        fontWeight: 400,
        lineHeight: `normal`,

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: `0.25rem 0`,

        width: `${fullWidth ? `100%` : ""}`,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}>
      <StyledLabel>{`Label`}</StyledLabel>
      <InputBox>
        {getIconFromString(startIcon)}
        <StyledInput
          placeholder="Placeholder"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          disabled={disabled}
          value={value}
        />
        {getIconFromString(endIcon)}
      </InputBox>
      {helperText && <StyledHelper>{helperText}</StyledHelper>}
    </div>
  );
};

const getColor = (
  hover: boolean,
  focus: boolean,
  error: boolean,
  disabled?: boolean
) => {
  if (disabled) {
    return `#E0E0E0`;
  }
  if (hover) {
    return `#333`;
  }

  if (error) {
    return `#D32F2F`;
  }

  if (focus) {
    return `#2962FF`;
  }

  return `#333`;
};

const getHeight = (multiline: boolean, row: number) => {
  if (!multiline) {
    return ``;
  }
  return `${row * 1.25}rem`;
};

const getIconFromString = (icon: iconString) => {
  let MuiIcon;
  switch (icon) {
    case "tractor":
      MuiIcon = <AgricultureIcon style={{ fontSize: "1.125rem" }} />;
      break;
    case "phone":
      MuiIcon = <LocalPhoneIcon style={{ fontSize: "1.125rem" }} />;
      break;
    case "account":
      MuiIcon = <AccountCircleIcon style={{ fontSize: "1.125rem" }} />;
      break;
    case "airline":
      MuiIcon = (
        <AirlineSeatReclineExtraIcon style={{ fontSize: "1.125rem" }} />
      );
      break;
    case "accessible":
      MuiIcon = <AccessibleIcon style={{ fontSize: "1.125rem" }} />;
      break;

    default:
      MuiIcon = <></>;
      break;
  }
  return MuiIcon;
};

export default Input;
