import Link from 'next/link';

const items = [
  {
    title: 'Digital product design',
    description:
      'Design your digital product from scratch, or take your existing product to the next level. I know what it takes to create a truly great product.',
    tags: ['Prototyping', 'UX', 'Design systems'],
  },
  {
    title: 'Website design',
    description:
      'Finally get the marketing site your business deserves. I"ve been designing websites for leading companies over the last decade.',
    tags: ['brand application', 'Visual design'],
  },
  {
    title: 'Framer development',
    description:
      'Bring your marketing site to life with best-in-class Framer development. The result is a website that anyone on your team can update.',
    tags: ['Responsive design', 'SEO', 'Animation'],
  },
];

export const Services = () => {
  return (
    <section className='container py-12 grid md:py-20 md:grid-cols-2'>
      <h2 className='text-2xl font-bold mb-6'>Projects</h2>
      <div className='grid gap-10 md:gap-16'>
        {items.map((item) => (
          <div key={item.title}>
            <h3 className='font-bold text-xl md:text-4xl'>{item.title}</h3>
            <p className='my-4 text-sm text-neutral-700 md:text-base'>{item.description}</p>
            <div className='flex items-center gap-2 font-bold'>
              {item.tags.map((tag) => (
                <span key={tag} className='text-sm bg-[#e8e8e8] px-2 py-1 rounded-md' >{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
