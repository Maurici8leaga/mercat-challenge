import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import store from "./reducers/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter basename="/mercat-challenge">
					<Header />
					<Routes>
						<Route path="/" element={<ListItem />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
