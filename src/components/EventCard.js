import React from "react";

import Calender from "../assets/Icons/IconCalender.svg";
import LocationIcon from "../assets/Icons/IconLocation.svg";
// import Calender from "../assets/Icons/IconCalender.png";
// import LocationIcon from "../assets/Icons/IconLocation.png";
const EventCard = ({
	event,
	name,
	start_date,
	end_date,
	streetName,
	city,
	state,
	postcode,
	event_image,
}) => {
	return (
		<div className=" flex justify-between  mx-auto">
			<div className="flex flex-col mr-[170px] ">
				<p className="text-[64px] font-[700] text-[#240D57] ">{event}</p>
				<p>
					Hosted By <b>{name}</b>
				</p>
				<div className="flex flex-row mt-10">
					<img src={Calender} className="w-[55px] h-[55px]  " alt="" />
					<div className="flex flex-col ml-3">
						<p className="text-[#240D57] font-[700]">
							{start_date ? start_date : "18 August 6:00PM"}
						</p>

						<p className="text-[#4F4F4F] font-[300]">
							to&nbsp;
							<span className="text-[#4F4F4F] font-[700]">
								{end_date ? end_date : "19 August 1:00PM"}
							</span>
							&nbsp;UTC +10
						</p>
					</div>
				</div>
				<div className="flex flex-row mt-10">
					<img src={LocationIcon} className="w-[55px] h-[55px]  " alt="" />
					<div className="flex flex-col ml-3">
						<p className="text-[#240D57] font-[700]">
							{streetName ? streetName : "Street Name"}
						</p>

						<p className="text-[#4F4F4F] font-[300]">
							{city ? city : "City"},&nbsp;
							{state ? state : "State"},&nbsp;
							{postcode ? postcode : "Postcode"}&nbsp;
						</p>
					</div>
				</div>
			</div>
			<img src={event_image} className="w-[500px] h-[500px] " alt="Imag" />
		</div>
	);
};

export default EventCard;
