import React from "react";
import EventCard from "./EventCard";
import Cake from "../assets/Birthdaycake.png";

const Event = () => {
	return (
		<div className="bg-[#DDD] h-screen w-full flex flex-col gap-[184px] py-[184px] ">
			<EventCard event="Birthday Bash" name="Elysia" event_image={Cake} />
		</div>
	);
};

export default Event;
