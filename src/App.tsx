import { useState } from 'react'
import ClampRender from './components/ClampRender'
import Input from './components/Input'

export default function App() {
	const [minWidthValue, setMinWidthValue] = useState('')
	const [maxWidthValue, setMaxWidthValue] = useState('')
	const [minFontValue, setMinFontValue] = useState('')
	const [maxFontValue, setMaxFontValue] = useState('')

	return (
		<div>
			<Input
				inputValue={minWidthValue}
				setValue={setMinWidthValue}
				placeholder="minWidth"
			/>
			<Input
				inputValue={maxWidthValue}
				setValue={setMaxWidthValue}
				placeholder="maxWidth"
			/>
			<Input
				inputValue={minFontValue}
				setValue={setMinFontValue}
				placeholder="minFont"
			/>
			<Input
				inputValue={maxFontValue}
				setValue={setMaxFontValue}
				placeholder="maxFont"
			/>

			{minWidthValue && maxWidthValue && minFontValue && maxFontValue && (
				<ClampRender
					maxFontSize={Number(maxFontValue)}
					minFontSize={Number(minFontValue)}
					minWidthPx={Number(minWidthValue)}
					maxWidthPx={Number(maxWidthValue)}
				/>
			)}
		</div>
	)
}
