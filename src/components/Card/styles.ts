import styled from 'styled-components';
import { Container } from '@/components/UI/Container';

export const StyledCardContainer = styled(Container)`
  flex-direction: column;
  border-radius: 8px;
  min-height: 14rem;
  cursor: pointer;
`;

export const StyledLabelContainer = styled(Container)`
  border-radius: 8px 8px 0 0;
  padding: 8px;
`;

export const StyledInfoContainer = styled(Container)`
  flex-direction: column;
  padding: 8px;
  gap: 1rem;
`;

export const StyledDivider = styled.hr`
  width: 80%;
  margin: 0 auto;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.palette.grey[100]};
`;
