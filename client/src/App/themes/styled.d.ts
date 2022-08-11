// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		"id": string,
		"name": string,
		"field": {
			"text": string,
			"background": string
		}
		"colors": {
			"body": string,
			"text": string,
			"white": string,
			"gray": string,
			"modal": {
				"text": string,
				"background": string
			},
			"button": {
				"text": string,
				"background": string
			},
			"link": {
				"text": string,
				"opacity": number
			}
		},
		"font": string
	}
}
