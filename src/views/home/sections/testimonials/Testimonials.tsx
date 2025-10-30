const items = [
  {
    title: 'Michael Rodriguez',
    position: 'Co-founder',
    description:
      'Adrienne exceeded our expectations as a digital product designer. What sets Adrienne apart is not only her technical proficiency but also her dedication to understanding the end users needs.',
  },
  {
    title: 'Michael Rodriguez',
    position: 'Co-founder',
    description:
      'Adrienne exceeded our expectations as a digital product designer. What sets Adrienne apart is not only her technical proficiency but also her dedication to understanding the end users needs.',
  },
  {
    title: 'Michael Rodriguez',
    position: 'Co-founder',
    description:
      'Adrienne exceeded our expectations as a digital product designer. What sets Adrienne apart is not only her technical proficiency but also her dedication to understanding the end users needs.',
  },
];

export const Testimonials = () => {
  return (
    <section className='container py-12 md:py-20'>
      <h2 className='text-2xl font-bold mb-6'>Testimonials</h2>

      <div className='grid gap-4 md:grid-cols-3'>
        {items.map((item, index) => (
          <div key={index} className='bg-[#f6f6f6] rounded-xl p-4 md:p-6'>
            <p className='text-neutral-600'>{item.description}</p>

            <div className='mt-16 flex items-center gap-3'>
              <span className='w-10 h-10 rounded-full inline-block bg-black' />
              <div>
                <p className='font-bold'>{item.title}</p>
                <p className='font-medium text-neutral-600'>{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
