import { useRef, useEffect } from 'react';
import NewsList from '~/components/NewsList/NewsList';

function Home() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleScroll = (e: any) => {
      // eslint-disable-next-line no-console
      console.log(e);
    };

    const current = ref.current;
    current?.addEventListener('scroll', handleScroll);
    return () => current?.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return (
    <div ref={ref} className='container'>
      <h1>News</h1>
      <NewsList />
    </div>
  );
}

export default Home;
