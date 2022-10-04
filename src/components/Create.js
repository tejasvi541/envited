import React from "react";
import { Link } from "react-router-dom";

const Create = () => {
	return (
		<div className="bg-[#EDE5FF] h-screen w-full  mx-auto px-4 flex items-center justify-center">
			<div className="block p-6 rounded-lg shadow-lg bg-[#fafafa] max-w-sm  w-[480px]">
				<form>
					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">Event Name</label>
						<input
							type="text"
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                          focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="event_name"
							placeholder="Event Name"
						/>
					</div>
					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">Host Name</label>
						<input
							type="text"
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="host_name"
							placeholder="Host Name"
						/>
					</div>

					<div className="datepicker  form-group mb-6">
						<label className="text-gray-700 m-1">Start Date</label>
						<input
							type="datetime-local"
							className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							placeholder="Select a Start date"
							id="start_date"
						/>
						<button
							className="datepicker-toggle-button"
							data-mdb-toggle="datepicker"
						/>
					</div>

					<div className="datepicker form-group mb-6 ">
						<label className="text-gray-700 m-1">End Date</label>
						<input
							type="datetime-local"
							className=" block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							placeholder="Select an End date"
							id="end_date"
						/>
					</div>

					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">Street Name</label>
						<input
							type="text"
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="street"
							placeholder="Street Name"
						/>
					</div>

					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">City</label>
						<input
							type="text"
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="city"
							placeholder="City"
						/>
					</div>

					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">State</label>
						<input
							type="text"
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="state"
							placeholder="State"
						/>
					</div>

					<div className="form-group mb-6">
						<label className="text-gray-700 m-1">Post Code</label>
						<input
							type="text  "
							className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-[#8456EC] focus:outline-none"
							id="postcode"
							placeholder="Post Code"
						/>
					</div>
					<Link to="/event">
						<button
							type="submit"
							className="
                            w-full
                            px-6
                            py-2.5
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded-[10px]
                            shadow-md
                            bg-gradient-to-r from-[#8456EC] to-[#E87BF8] 
                            transition
                            duration-150
                            ease-in-out"
						>
							Create
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Create;
