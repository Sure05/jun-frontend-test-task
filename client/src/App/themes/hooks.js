import {useEffect, useState} from 'react';
import _ from 'lodash';
import {getFromLS, setToLS} from "../assets/storage";

export const useTheme = () => {
	const systemIsDarkTheme = useThemeDetector();
	const themes = getFromLS('all-themes');
	const [theme, setTheme] = useState(systemIsDarkTheme ? themes.data.dark : themes.data.light);
	const [themeLoaded, setThemeLoaded] = useState(false);

	const setMode = (mode) => {
		setToLS('theme', mode)
		setTheme(mode);
	};

	const getFonts = () => {
		return _.values(_.mapValues(themes.data, 'font'));
	}

	useEffect(() => {
		const localTheme = getFromLS('theme');
		localTheme ? setTheme(localTheme) : setTheme(systemIsDarkTheme ? themes.data.dark : themes.data.light);
		setThemeLoaded(true);
	}, []);

	return { theme, themeLoaded, setMode, getFonts };
};

export const useThemeDetector = () => {
	const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
	const mqListener = (e)  => setIsDarkTheme(e.matches);

	useEffect(() => {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		darkThemeMq.addListener(mqListener);
		return () => darkThemeMq.removeListener(mqListener);
	}, []);
	return isDarkTheme;
}
