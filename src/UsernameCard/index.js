import React from "react";
import './style.css'
//zidt props bich nakhow donnee 
//user jibtha min page home variable 3ayetlow kif mahouwa
const UsernameCard = (props)=>{
return(
    <>
    <div className="username_card">
        <div className="username_card_image">
            {
                props.user.picture == "" ?(
                <h3 className="profile_caracter">{props.user.firstname[0]}</h3>):(
            <img src={props.user.picture} />)
            }
        </div>
        <div className="username_card_info">
            <h3 className="username ">{props.user.firstname +' '+props.user.lastname}</h3>
            <span className="small">@fedimbarek</span>

        </div>
    </div>
    </>
)
}
export default UsernameCard;