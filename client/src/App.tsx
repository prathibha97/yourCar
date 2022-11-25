import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import HomePage from './containers/HomePage';

const Appcontainer = styled.div`
  ${tw`
w-full 
h-full 
flex
flex-col
`}
`;

function App() {
  return (
    <Appcontainer>
      <HomePage />
    </Appcontainer>
  );
}

export default App;
