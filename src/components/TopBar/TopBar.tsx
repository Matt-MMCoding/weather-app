import { Container } from '@/components/UI/Container';
import {
  StyledInput,
  StyledLocationContainer,
  StyledSearchContainer,
} from './styles';

// Icons
import { GoLocation } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';

const TopBar = () => {
  return (
    <Container
      width="60vw"
      alignItems="center"
      margin="0 auto"
      paddingTop="1rem"
    >
      <StyledLocationContainer>
        <GoLocation />
        <p>Nottingham, UK</p>
      </StyledLocationContainer>
      <StyledSearchContainer>
        <BiSearch />
        <StyledInput
          type="text"
          placeholder="search"
        />
      </StyledSearchContainer>
    </Container>
  );
};

export default TopBar;
