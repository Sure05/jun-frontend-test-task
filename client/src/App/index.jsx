import React, {useEffect, useState} from "react";
import {useWebsocket} from "./components/WebSocketContext";
import Info from "./Info";
import {useDispatch, useSelector} from "react-redux";
import {updateState} from "./redux/Slice/CheckIn";
import {useTheme} from "./themes/hooks";
import WebFont from "webfontloader";
import styled, {ThemeProvider} from "styled-components";
import SwitcherThemeButton from "./themes/SwitcherThemeButton";
import {GlobalStyles} from "./themes/GlobalStyles";
import StartPopup from "./components/StartPopup";

export const ThemeContext = React.createContext(null);

const Header = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
`

const App = () => {
	
	const [isOpen, setIsOpen] = useState(false);
	const socket = useWebsocket();
	const dispatch = useDispatch();
	const {active} = useSelector(state => state.checkIn)
	const {theme, themeLoaded, getFonts} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	
	useEffect(() => {
		setIsOpen(true);
	}, [])
	
	useEffect(() => {
		setSelectedTheme(theme);
	}, [theme, themeLoaded]);
	
	useEffect(() => {
		WebFont.load({
			google: {
				families: getFonts()
			}
		});
	});
	
	useEffect(() => {
		if (!active && socket) {
			socket.disconnect();
		}
	}, [active, socket]);
	
	const startRate = () => {
		socket.connect();
		socket?.emit('start');
		socket?.on('ticker', (data) => {
			dispatch(updateState(data))
		});
	}
	
	const closeModal = () => {
		setIsOpen(false);
		startRate()
	}
	
	return (
		<ThemeContext.Provider value={setSelectedTheme}>
			{
				themeLoaded && <ThemeProvider theme={selectedTheme}>
					<GlobalStyles/>
					<StartPopup onClose={closeModal} isOpen={isOpen} />
					<Header>
						<SwitcherThemeButton/>
						<h1>Hippodrome</h1>
					</Header>
					
					<Info/>
				</ThemeProvider>
			}
		</ThemeContext.Provider>
	)
}

export default App
