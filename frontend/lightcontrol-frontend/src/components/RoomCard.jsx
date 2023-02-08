import React from 'react'
// import { Link } from 'react-router-dom'
import '../styles/RoomCard.css'
// import defaultIcon from '../assets/default.png' // Default Icon

const Card = ({roomName,Icon,Status,Brightness}) => {
	const getCardColorClass = ({Status,Brightness}) => {
        if ((Status == "Mannual" || Status == "Auto") && Brightness == 0) {
            return "OffCardColor"
        } else if (Status == "Mannual" && Brightness > 1) {
            return "MannualCardColor"
        } else if (Status == "Auto" && Brightness > 1) {
            return "AutoCardColor"
        }
	}
		
	// const routeName = `/${category}/${id}`

	return (
		<div>
			<p>Hello World</p>
			{/* <div className={`${getCardColorClass(Status,Brightness)}`}> */}
			<div className="OffCardColor">
      			<h4><b>Living Room</b><button className = "Status">Status</button></h4>

			</div>
    		
		</div>
	)
}
export default Card