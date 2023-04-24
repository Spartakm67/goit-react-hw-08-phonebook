import { HomeContainer, HomeTitle, Img } from "./Home.styled";
import Phonebook from '../../images/Phonebook.png';

export default function Home() {
  return (
    <HomeContainer>
      <Img
            src={Phonebook}
            alt="phonebook image"
          />
      <HomeTitle>
        PhoneBook manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
}
