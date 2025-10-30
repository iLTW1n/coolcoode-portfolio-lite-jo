'use client';
import Slider from 'react-slick';
import Image from 'next/image';
import bgImage from './bg-projects.jpg';

const items = [
  {
    title: 'Facade',
    description: 'Product design',
    image: bgImage.src,
  },
  {
    title: 'Parameter',
    description: 'Product design',
    image: bgImage.src,
  },
  {
    title: 'Slack',
    description: 'Product design',
    image: bgImage.src,
  },
  {
    title: 'Chakra',
    description: 'Product design',
    image: bgImage.src,
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Projects = () => {
  return (
    <section className='py-12 md:py-20'>
      <h2 className='container text-2xl font-bold mb-6'>Projects</h2>

      <div className='slider-container'>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className='p-2'>
              <div className='bg-[#e8e8e8] rounded-lg p-4 md:p-10'>
                <div className='w-fit mx-auto rounded-lg overflow-hidden'>
                  <Image src={item.image} alt={item.title} width={500} height={500} />
                </div>
                <div className='mt-4 md:mt-10'>
                  <h4 className='font-bold text-lg'>{item.title}</h4>
                  <p className='font-medium text-neutral-600'>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
