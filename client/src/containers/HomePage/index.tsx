import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../components/bookCard';
import { Marginer } from '../../components/marginer';
import Navbar from '../../components/Navbar';
import TopSection from '../topSection';

const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center 
overflow-x-hidden
`}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='4em'/>
      <BookCard />
    </PageContainer>
  );
};

export default HomePage;
