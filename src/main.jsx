import { render } from 'preact'
import { ThemeProvider } from 'emotion-theming'
import rebass from '@rebass/preset'
import { App } from './app'
import './index.css'

render(
	<ThemeProvider theme={rebass}>
		<App />
	</ThemeProvider>,
	document.querySelector('#app')
)
