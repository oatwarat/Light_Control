import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/RoomCard.css'
// import defaultIcon from '../assets/default.png' // Default Icon

const Card = ({roomName,Brightness=0}) => {

	const [Status, setStatus] = useState("Mannual")

	const getCardColorClass = ({Status,Brightness}) => {
        if ((Status == "Mannual" || Status == "Auto") && Brightness == 0) {
            return "OffCardColor"
        } else if (Status == "Mannual" && Brightness > 1) {
            return "MannualCardColor"
        } else if (Status == "Auto" && Brightness > 1) {
            return "AutoCardColor"
        }
	}

	const StatusSwtich = () => {
		if (Status == "Mannual") {
			setStatus("Auto")
		} else if (Status == "Auto") {
			setStatus("MannualPhys")
		} else if (Status == "MannualPhys"){
			setStatus("MannualWeb")
		} else if (Status == "MannualWeb"){
			setStatus("Mannual")
		}
	}

	const BrightnessValue = useState("")
	let color = getCardColorClass({Status,Brightness})

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
		<div className='card-container'>
			{/* <div className={`${getCardColorClass(Status,Brightness)}`}> */}
			<div className='room-controller'>
				<div className='name-status'>
					<h4><b>{roomName}</b> <button className = {color} onClick={StatusSwtich}>{Status}</button></h4>
				</div>
				<div className='input-brightness'></div>
                <input onChange = {e => BrightnessValue}/>
				<button className = "Brightness" onClick={handleSubmit}>change level</button>
			</div>
		</div>
	)
}
export default Card