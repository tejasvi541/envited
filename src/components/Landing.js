import React from "react";
import Landing_Image from "../assets/Landing_Image.svg";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className="bg-[#EDE5FF] h-screen w-full flex justify-between items-center mx-auto px-4">
			<img src={Landing_Image} className="w-[440px]  ml-[170px] " alt="Imag" />
			<div className="flex flex-col mr-[170px] ">
				<p className="text-[64px] font-[700] text-[#240D57] text-right">
					Imagine if <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
						Snapchat
					</span>
					<br /> Had Events
				</p>
				<p className="text-[#4F4F4F] font-[300] text-[24px] text-right">
					Easily host and share events with your friends <br /> across any
					social media.
				</p>
				<Link to="/create" className=" self-end">
					<button className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] text-white w-[200px] rounded-[10px] font-medium my-6 mx-auto md:mx-0 py-4">
						Create My Event
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
