/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const styles = sizes[size];
  return (
    <ProgressBarWrapper style={styles} role="progressbar" aria-valuenow={value}>
      <ProgressBarPadding>
        <Progression style={styles} value={value} />
        <VisuallyHidden>Progression is at {value}%</VisuallyHidden>
      </ProgressBarPadding>
    </ProgressBarWrapper>
  );
};

const sizes = {
  small: {
    "--outer-radius": "4px",
    "--inner-radius": "4px",
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--outer-radius": "4px",
    "--inner-radius": "4px",
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--outer-radius": "8px",
    "--inner-radius": "4px",
    "--height": "16px",
    "--padding": "4px",
  },
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--outer-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  width: 370px;
`;

const ProgressBarPadding = styled.div`
  border-radius: var(--inner-radius);
  overflow: hidden;
  width: 100%;
`;

const Progression = styled.span`
  background-color: ${COLORS.primary};
  display: block;
  height: var(--height);
  width: ${(props) => props.value}%;
`;

export default ProgressBar;
