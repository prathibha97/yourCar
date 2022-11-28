import { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoDarkImg from '../../assets/images/car-logo-dark.png';
import carLogo from '../../assets/images/car-logo.png';

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark'
}

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;
const LogoText = styled.div`
  ${tw`m-1 text-xl font-bold text-black md:text-2xl`}
  ${({ color }: any) => (color === 'white' ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`}
  img {
    width: auto;
    height: 100%;
  }
`;

const Logo: FC<ILogoProps> = ({ color , bgColor}) => {
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === 'dark' ? CarLogoDarkImg : carLogo} alt="logo" />
      </Image>
      <LogoText color={color || 'dark'}>Yourcar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
