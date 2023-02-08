import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import '../styles/RoomCard.css'
// import defaultIcon from '../assets/default.png' // Default Icon

const Card = ({roomName}) => {

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

	const RoomId = (roomName) => {
		if (roomName == "Living Room") {
			return 1
		} else if (roomName == "Bed Room") {
			return 2
		} else if (roomName == "Kitchen") {
			return 3
		}
	}

	const BrightnessValue = useState("")

	const handleSubmit = (e) => {
		setBrightness(inputRef.current.value)
		e.preventDefault()
		const ressult = {
			roomName,
			Status,
			Brightness : BrightnessValue
		}
		const data = ressult.json()
		const Roomid = RoomId(roomName)
		const url = "http://group12.exceed19.online/"
		fetch(url+Roomid,
		{
			method: 'POST',
			body: data
		}
		).then((res) => console.log("Information sent"))

	}

	// const routeName = `/${category}/${id}`
	const inputRef = useRef(null)
	const [Brightness, setBrightness] = useState()

	const handleClick = () => {
		setBrightness(inputRef.current.value)
	}

	let color = getCardColorClass({Status,Brightness})

	return (
		<div className='card-container'>
			{/* <div className={`${getCardColorClass(Status,Brightness)}`}> */}
			<div className='room-controller'>
				<div className='name-status'>
					<h4><b>{roomName}</b> <button className = {color} onClick={StatusSwtich}>{Status}</button></h4>
				</div>
				<div className='input-brightness'></div>
                <input type="text" ref={inputRef}/>
				<button className = "Brightness" onClick={handleSubmit}>change level</button>
			</div>
		</div>
	)
}
export default Card