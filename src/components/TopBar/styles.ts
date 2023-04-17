import styled from 'styled-components';
import { Container } from '@/components/UI/Container';

export const StyledLocationContainer = styled(Container)`
  flex: 1;
`;

export const StyledSearchContainer = styled(Container)`
  flex: 1;
  border-radius: 18px;
  background-color: #444;
  color: #fff;
  padding: 6px;
`;

export const StyledInput = styled.input`
  margin-left: 4px;
  background: transparent;
  border: none;
  color: inherit;

  &:focus {
    outline: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;
