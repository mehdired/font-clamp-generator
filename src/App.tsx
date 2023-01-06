import { useState } from 'react'
import ClampRender from './components/ClampRender'
import { MemoInput } from './components/Input'

export default function App() {
	const [minWidthValue, setMinWidthValue] = useState('')
	const [maxWidthValue, setMaxWidthValue] = useState('')
	const [minFontValue, setMinFontValue] = useState('')
	const [maxFontValue, setMaxFontValue] = useState('')

	return (
		<div>
			<MemoInput
				inputValue={minWidthValue}
				setValue={setMinWidthValue}
				placeholder="minWidth"
			/>
			<MemoInput
				inputValue={maxWidthValue}
				setValue={setMaxWidthValue}
				placeholder="maxWidth"
			/>
			<MemoInput
				inputValue={minFontValue}
				setValue={setMinFontValue}
				placeholder="minFont"
			/>
			<MemoInput
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
