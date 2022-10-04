import Landing from "./components/Landing";
import Create from "./components/Create";
import Event from "./components/Event";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Navigate to="/landing" />}></Route>
				<Route path="landing" element={<Landing />} />
				<Route path="create" element={<Create />} />
				<Route path="event" element={<Event />} />
			</Routes>
		</div>
	);
}

export default App;
