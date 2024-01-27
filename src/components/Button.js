import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const sizeStyle = css`
  ${(props) =>
    props.size === 'Large' &&
    css`
      width: 100%;
      height: 60px;
      font-size: 16px;
    `};

  ${(props) =>
    props.size === 'Medium' &&
    css`
      width: 104px;
      height: 32px;
      font-size: 16px;
    `};

  ${(props) =>
    props.size === 'Small' &&
    css`
      width: 76px;
      height: 22px;
      font-size: 11px;
    `};
`;

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  ${sizeStyle};

  ${(
    props,
) =>
    props.cancel &&
    css`
      background-color: ${(props) => props.theme.red};
    `};

  ${(
    props,
) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.gray};
      cursor: not-allowed;
    `};

  &:active {
    opacity: 0.8;
  }

  ${(props) =>
    props.onClick &&
    css`
      &:hover {
        background-color: ${(props) => props.theme.primaryDark};
      }
    `};
`;

function Button(props) {
  const { children, size, disabled, cancel, onClick } = props;

  return (
      <StyledButton disabled={disabled} size={size} cancel={cancel} onClick={onClick}>
        {children}
      </StyledButton>
  );
}

export default Button;
