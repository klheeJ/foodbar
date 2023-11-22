const Subscribe = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img src="/news.jpg" alt="" />
      <div className="absolute text-white text-center">
        <p>Subscribe to our weekly newsletter</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <input type="text" name="email" id="email" placeholder="Enter Email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscribe
