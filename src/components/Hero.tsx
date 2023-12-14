
const Hero = () => {
  return (
    <section className="h-[36rem]">
      <div className="bg-[url('/Slider.jpg')] h-full w-100 bg-auto bg-right-bottom flex flex-col justify-center pl-32">
        <div className="text-white">
          <div className="text-xl">Organic Products For Your</div>
          <h2 className="text-6xl">Mouthwatering Pizza And Bacon <span className="text-red-600">Burger</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, corrupti.</p>
        </div>
        <div className="flex flex-row gap-4 mt-6">
          <button className="bg-red-700 p-2 pl-8 pr-8 font-bold text-white tracking-widest hover:opacity-90 transition ease-in-out delay-100">Shop Now</button>
          <button className="bg-white p-2 pl-8 pr-8 font-bold tracking-widest hover:opacity-70 transition ease-in-out delay-100">Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
