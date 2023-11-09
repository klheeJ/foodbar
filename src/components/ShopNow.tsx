const ShopNow = () => {
  return (
    <section className="bg-[#3E3D3D] flex flex-row pt-16 pb-16 justify-center gap-7">
      <div className="shop-parent relative">
        <img src="/chees.jpg" alt="" />
        <div className="shop-child absolute inset-0 flex items-center justify-center">
          <button className="shop-button bg-white p-2 pl-10 pr-10 rounded-lg">Shop Now</button>
        </div>
      </div>
      <div className="shop-parent relative">
        <img src="/delicious.jpg" alt="" />
        <div className="shop-child absolute inset-0 flex items-center justify-center">
          <button className="shop-button bg-white p-2 pl-10 pr-10 rounded-lg">Shop Now</button>
        </div>
      </div>

    </section>
  )
}

export default ShopNow
