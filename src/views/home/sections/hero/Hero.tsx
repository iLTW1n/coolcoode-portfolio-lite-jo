import Link from 'next/link';

export const Hero = () => {
  return (
    <section className='container py-12 md:py-20'>
      <h1 className='text-3xl font-bold mb-4 md:text-7xl md:mb-8'>
        Freelance product designer for early-stage startups
      </h1>
      <div className='max-w-xl ml-auto'>
        <p className='text-sm text-neutral-600 md:text-lg'>
          I have experience delivering high-impact work for leading consumer. I&apos;have been
          designing and building digital products for 8 years. Currently working for Trapeze in
          Berlin.
        </p>
        <div className='font-bold mt-4 flex items-center gap-8 md:mt-8 md:text-2xl md:gap-16'>
          <div className='flex items-center gap-2'>
            <span className='inline-block w-4 h-4 rounded-full bg-violet-600' />{' '}
            <Link href='#'>About me</Link>
          </div>
          <div className='flex items-center gap-2'>
            <span className='inline-block w-4 h-4 rounded-full bg-violet-600' />{' '}
            <Link href='#'>hi@email.com</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
