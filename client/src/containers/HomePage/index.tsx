import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import Footer from '../../components/footer';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/Navbar';
import AboutUs from './aboutUs';
import BookingSteps from './bookingSteps';
import TopCars from './topCars';
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
      <BookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
