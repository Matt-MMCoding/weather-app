import { Container } from '@/components/UI/Container';
import { Typography } from '@/components/UI/Typography';
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
    >
      <StyledLocationContainer>
        <GoLocation />
        <Typography as="span">Nottingham, UK</Typography>
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
