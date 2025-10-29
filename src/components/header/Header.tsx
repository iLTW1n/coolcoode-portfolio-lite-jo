import Link from 'next/link';

export const Header = () => {
  return (
    <header
      className='
        container
        mt-4
      '
    >
      <div
        className='
          flex
          py-3 px-4
          bg-[#e8e8e8]
          rounded-lg
          items-center justify-between
          font-bold
          md:px-6
        '
      >
        <span>José Oscátegui</span>
        <div className='text-sm flex items-center gap-2 md:gap-6'>
          <Link href='#'>About</Link>
          <Link href='#'>Writing</Link>
          <Link href='#'>Contact</Link>
        </div>
      </div>
    </header>
  );
};
