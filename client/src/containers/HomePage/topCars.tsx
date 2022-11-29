import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import carService from '../../app/services/carService';
import Car from '../../components/car';
import { SCREENS } from '../../components/responsive';
import { Icar } from '../../typings/car';

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0`}
`;
const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`};
`;

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

const TopCars = () => {
  const [current, setCurrent] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const fetchTopCars = async() =>{
    const cars = await carService.getCars().catch((err)=>{
      console.log(err)
    })
    console.log(cars);
  }

  const testCar: Icar = {
    name: 'Audi S3 Car',
    mileage: '10k',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  const testCar2: Icar = {
    name: 'HONDA cITY 5 Seater Car',
    mileage: '20k',
    thumbnailSrc:
      'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  useEffect(()=>{
    fetchTopCars()
  },[])

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
  ];

  return (
    <TopCarsContainer>
      <Title>Explore Out Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={isMobile ? cars?.length : cars?.length / 3}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
};

export default TopCars;
