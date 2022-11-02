import logo from './logo.svg';
import './App.css';
import { Translator, useTranslatorWithComponents } from './utils/Translator';

function App() {
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				{useTranslatorWithComponents(
					Translator('privacyMessage', { privacyPolicy: 'PrivacyPolicy' }),
					{
						PrivacyPolicy: (
							<span style={{ color: '#61dafb', textDecoration: 'underline' }}>
								{Translator('privacyPolicy')}
							</span>
						),
					}
				)}
			</p>
			<p>{Translator('welcomeTitle', { username: 'Tailorita' })}</p>
		</div>
	);
}

export default App;
