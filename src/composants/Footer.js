import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Parce que c'est dans bann vié marmites que y fait bann bons carri…
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <div>
                <textarea
                    value={inputValue}
                    onChangeCapture={(e) => setInputValue(e.target.value)}
                />
            </div>
            <button onClick={() => alert(inputValue)}>
                Alertez-moi
            </button>
		</footer>
	)
}

export default Footer