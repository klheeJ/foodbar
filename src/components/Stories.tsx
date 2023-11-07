import { foodStories } from "./lists"

const Stories = () => {
  return (
    <div className="bg-[#131313]">
        <div>Our Food Stories</div>
        <div className="flex">
          {foodStories.map((story)=> {
            return (
                <div>
                    <img className="max-w-xl" src={story.image} alt="" />
                    <p>{story.desc}</p>
                </div>
            )
          })}
        </div>
    </div>
  )
}

export default Stories
