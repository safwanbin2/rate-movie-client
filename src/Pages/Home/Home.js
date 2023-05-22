import React from 'react';
import Banner from './Banner';
import RandomMovieBanner from './RandomMovieBanner';
import TopRatedMovies from './TopRatedMovies/TopRatedMovies';

const Home = () => {
  return (
    <section className='w-full '>
      {/* banner for home */}
      <Banner
        title="Find Movie Reviews"
        description="Movies could provide both enjoyment and stress reduction
        Many people find watching movies both entertaining and a way to reduce stress. Watching movies can make us forget our problems is an alternative to anxiety loss. As previously said, watching movies can have a positive emotional impact."
        photo="https://wallpapercave.com/wp/wp4500229.jpg"
      />
      {/* random movie banner */}
      <RandomMovieBanner />
      {/* top rated movies */}
      <TopRatedMovies />
    </section>
  );
};

export default Home;