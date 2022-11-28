import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/Navbar';
import AboutUs from './aboutUs';
import BookingSteps from './bookingSteps';
import TopSection from './topSection';

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps/>
      <AboutUs/>
    </PageContainer>
  );
};

export default HomePage;
