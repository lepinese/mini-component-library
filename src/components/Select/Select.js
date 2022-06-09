import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>label</VisuallyHidden>
      <TrueSelect value={value} onChange={onChange}>
        {children}
      </TrueSelect>
      <FakeSelect aria-hidden>
        {displayedValue}
        <ChevronIcon id="chevron-down" size="24" strokeWidth="2" />
      </FakeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  position: relative;
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const TrueSelect = styled.select`
  appearance: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0; // hides the text for the current selection
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const FakeSelect = styled.div`
  align-items: center;
  background: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  display: flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 12px 10px 12px 16px;
  pointer-events: none;
  position: relative;
  width: fit-content;
`;

const ChevronIcon = styled(Icon)`
  margin-left: 24px;
`;

export default Select;
