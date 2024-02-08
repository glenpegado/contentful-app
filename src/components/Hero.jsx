import heroSVG from '../assets/hero.svg';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            I'm baby hoodie meggings echo park artisan retro single-origin
            coffee. Pug green juice gastropub coloring book vaporware affogato
            shabby chic bitters shaman roof party slow-carb bruh. Twee tonx
            ramps 3 wolf moon normcore viral subway tile meh. Post-ironic blog
            flexitarian twee helvetica listicle flannel solarpunk
          </p>
        </div>
        <div className='img-container'>
          <img src={heroSVG} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
