import { useState } from 'react'
import ClampRender from './components/ClampRender'
import { MemoInput } from './components/Input'

export type ParamClampType = {
	minWidthValue: number
	maxWidthValue: number
	minFontValue: number
	maxFontValue: number
}

export default function App() {
	const [paramClamp, setParamClamp] = useState<ParamClampType>({
		minWidthValue: 0,
		maxWidthValue: 0,
		minFontValue: 0,
		maxFontValue: 0
	})

	return (
		<div>
			{Object.entries(paramClamp).map(([key, value]) => (
				<MemoInput
					key={key}
					name={key}
					inputValue={value}
					setValue={setParamClamp}
					placeholder="minWidth"
				/>
			))}

			{!Object.values(paramClamp).some((value) => !value) && (
				<ClampRender paramClamp={paramClamp} />
			)}
		</div>
	)
}
