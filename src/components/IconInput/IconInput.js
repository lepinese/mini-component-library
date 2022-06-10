import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size];
  return (
    <Wrapper for="input">
      <VisuallyHidden>{label}</VisuallyHidden>
      <DynamicIcon style={styles} id={icon} size={size === "small" ? 12 : 16} />
      <Input
        style={styles}
        id="input"
        type="text"
        placeholder={placeholder}
        width={width}
      />
    </Wrapper>
  );
};

const sizes = {
  small: {
    "--font-size": "14px",
    "--border-stroke-width": "1px",
    "--padding": "2px",
    "--padding-left": "20px",
  },
  large: {
    "--font-size": "18px",
    "--border-stroke-width": "2px",
    "--padding": "4px",
    "--padding-left": "30px",
  },
};

const Wrapper = styled.label({
  display: "block",
  color: COLORS.gray700,
  position: "relative",

  ":hover": {
    color: COLORS.black,
  },
});

const Input = styled.input(({ width }) => ({
  border: "none",
  borderBottom: `var(--border-stroke-width) solid ${COLORS.black}`,
  color: "inherit",
  fontSize: "var(--font-size)",
  fontWeight: 700,
  outlineOffset: "2px",
  padding: "var(--padding)",
  paddingLeft: "var(--padding-left)",
  width: `${width}px`,

  "::placeholder": {
    color: COLORS.gray500,
    fontWeight: 400,
  },
}));

const DynamicIcon = styled(Icon)({
  alignItems: "center",
  color: "inherit",
  display: "flex",
  height: "100%",
  position: "absolute",
});

export default IconInput;
