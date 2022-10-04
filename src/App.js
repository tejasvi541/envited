import Landing from "./components/Landing";
import Create from "./components/Create";
import Event from "./components/Event";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/">
					<Route index path="landing" element={<Landing />} />
					<Route path="create" element={<Create />} />
					<Route path="event" element={<Event />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
