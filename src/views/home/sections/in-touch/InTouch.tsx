import Link from 'next/link';

export const InTouch = () => {
  return (
    <div
      className='
        container
        py-12
        md:py-20
      '
    >
      <div
        className='
          flex flex-col
          p-8
          text-center
          bg-[#f6f6f6]
          rounded-xl
          items-center justify-center
          md:py-16
        '
      >
        <span
          className='
            font-bold text-lg mb-1
          '
        >
          Get in touch
        </span>
        <p
          className='
            font-bold text-2xl max-w-2xl md:text-6xl
          '
        >
          Let&apos;s make something cool together
        </p>
        <div className='font-bold mt-4 flex items-center gap-8 md:mt-8 md:text-2xl md:gap-16'>
          <div className='flex items-center gap-2'>
            <span className='inline-block w-4 h-4 rounded-full bg-violet-600' />{' '}
            <Link href='#'>Contact</Link>
          </div>
          <div className='flex items-center gap-2'>
            <span className='inline-block w-4 h-4 rounded-full bg-violet-600' />{' '}
            <Link href='#'>hi@email.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
