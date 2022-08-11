import React, {useContext, useState} from "react";
import {useTheme} from "../hooks";
import {getFromLS} from "../../assets/storage";
import styled from "styled-components";
import {FaMoon, FaSun} from "react-icons/fa";
import {ThemeContext} from "../../index";

export const Input = styled.input`
  opacity: 0;
  position: absolute;
`
export const Label = styled.label`
  width: 46px;
  height: 20px;
  background-color: #4a4a4a;
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.1);
  cursor: pointer;
  margin-right: 20px;
`;
export const Moon = styled(FaMoon)`
  color: pink;
`
export const Sun = styled(FaSun)`
  color: yellow;
`
export const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 5px;
  left: 4px;
  border-radius: 50%;
  transition: transform 0.2s linear;
  ${({theme}) => {
    if (theme.name === 'Dark') return `transform: translateX(28px);`
  }}
`

const SwitcherThemeButton = () => {
	const themesFromStore = getFromLS('all-themes');
	const setSelectedTheme = useContext(ThemeContext);
	const {setMode, theme: selectedTheme} = useTheme();
	const [data] = useState(themesFromStore.data);
	
	const changeTheme = () => {
		const theme = (selectedTheme.name === 'Dark') ? data.light : data.dark;
		setMode(theme)
		setSelectedTheme(theme)
	}
	
	return (
		<>
			<Input type="checkbox" id={"checkbox"} onChange={changeTheme}/>
			<Label htmlFor="checkbox" className="label">
				<Moon/>
				<Sun/>
				<Ball/>
			</Label>
		</>
	)
}

export default SwitcherThemeButton
