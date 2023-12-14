const Questions = () => {
  return (
    <div className="flex items-center justify-center">
      <img className="opacity-80" src="/QuestionBackground.jpg" alt="" />
      <div className="absolute text-center">
        <div className="font-bold text-red-600 text-2xl ">Have Any Questions?</div>
        <div className="text-white text-4xl tracking-wider">+7645242368</div>
        <div className="mt-4">
          <button className="font-medium text-white rounded-md border-red-600 bg-red-600 p-3 pl-12 pr-12 mr-1 hover:opacity-90 transition ease-in-out delay-100">Make A Call</button>
          <button className="font-medium border-white rounded-md bg-white p-3 pl-12 pr-12 ml-1 hover:opacity-70 transition ease-in-out delay-100">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Questions
