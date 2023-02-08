import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/RoomCard.css'
// import defaultIcon from '../assets/default.png' // Default Icon

const Card = ({roomName,Status="Mannual",Brightness=0}) => {

	// const []

	const getCardColorClass = ({Status,Brightness}) => {
        if ((Status == "Mannual" || Status == "Auto") && Brightness == 0) {
            return "OffCardColor"
        } else if (Status == "Mannual" && Brightness > 1) {
            return "MannualCardColor"
        } else if (Status == "Auto" && Brightness > 1) {
            return "AutoCardColor"
        }
	}

	const StatusSwtich = (Status) => {
		if (Status == "Mannual") {
			Status = "Auto"
		} else if (Status == "Auto") {
			Status = "MannualPhys"
		} else if (Status == "MannualPhys"){
			Status = "MannualWeb"
		} else if (Status == "MannualWeb"){
			Status = "Mannual"
		}
	}

	const BrightnessValue = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		const ressult = {
			roomName,
			Status,
			Brightness : BrightnessValue
		}
		const data = ressult.json()
		fetch('http://localhost:5000/api/room',
		{
			method: 'POST',
			body: data
		}
		).then((res) => console.log("Hi"))

	}

	// const routeName = `/${category}/${id}`

	return (
		<div>
			{/* <div className={`${getCardColorClass(Status,Brightness)}`}> */}
			<div>
      			<h4><b>roomName</b><button className = {Status} onClick={StatusSwtich}>Status</button></h4>
                <input onChange = {e => BrightnessValue}/>
				<button className = "Brightness" onClick={handleSubmit}>change level</button>
			</div>
		</div>
	)
}
export default Card