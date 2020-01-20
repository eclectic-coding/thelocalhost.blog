import React from 'react';
import styled from 'styled-components';
import { AutoLink } from './linked-headers';

const StyledText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  ${() => AutoLink}
  margin-top: 50px;
`;

export const H2 = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};
