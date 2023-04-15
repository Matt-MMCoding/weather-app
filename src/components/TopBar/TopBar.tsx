import { Container } from '@/components/UI/Container';
import {
  StyledInput,
  StyledLocationContainer,
  StyledSearchContainer,
} from './styles';

// Icons
import { GoLocation } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';
import { Typography } from '../UI/Typography';

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
        <Typography>Nottingham, UK</Typography>
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
