import styled from 'styled-components';
import { Container } from '@/components/UI/Container';

export const StyledCardContainer = styled(Container)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.blue[0]};
  width: min-content;
  color: black;
  border-radius: 8px;
`;

export const StyledLabelContainer = styled(Container)`
  border-radius: 8px 8px 0 0;
  width: max-content;
  gap: 3rem;
  background-color: ${({ theme }) => theme.palette.blue[100]};
  padding: 8px;
`;

export const StyledInfoContainer = styled(Container)`
  flex-direction: column;
  padding: 8px;
`;
