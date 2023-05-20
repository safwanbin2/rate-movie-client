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
        description="lorefg duigfdugfdugfdgfduig fdugfdfgdugf dgfdfu dgfuig dfigudufgdugf udgf dfudg fugud fdu fud fdu   df               dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf fddddddddddddddd"
        photo="https://assets.mubicdn.net/images/film/252039/image-w1280.jpg?1643655668"
      />
      {/* random movie banner */}
      <RandomMovieBanner />
      {/* top rated movies */}
      <TopRatedMovies />
    </section>
  );
};

export default Home;