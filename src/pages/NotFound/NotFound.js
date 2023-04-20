import NotFoundImg from '../../images/NotFoundImg.jpg';
import { useLocation } from 'react-router-dom';
import { BackLink } from '../../components/BackLink/BackLink';
import { NotFoundContainer, Title, Img, } from './NotFound.styled';

const NotFound = () => {
    
const location = useLocation();
const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <NotFoundContainer>
        <Img
            src={NotFoundImg}
            alt="404 Sad Cat"
          />
        <Title>OOPS...PAGE NOT FOUND OR DOSN'T EXIST</Title>
        <BackLink to={backLinkHref}>Back to movies</BackLink>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
