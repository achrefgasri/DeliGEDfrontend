import React from "react";
import "./style.css";
import Story from "./Story";
const Stories = () =>{
    const stories = [
        {
            username : "ahmed",
            user_photo:"c.jpg",
            story_photo:"https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            username : "ahmed",
            user_photo:"c.jpg",
            story_photo:"https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg",
        },
        {
            username : "ahmed",
            user_photo:"c.jpg",
            story_photo:"https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]
return(
    <>
    <div className="stories">
    <Story type="new"/>
    {/* <Story type="old"/> */}
    {/* <Story type="old"/> */}
    {stories.map((story)=>(
        <Story type="old" data={story}/>
    ))}
    </div>

    </>
)

}

export default Stories;