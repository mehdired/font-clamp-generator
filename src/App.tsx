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

	const allInputsFilled = () => {
		return !Object.values(paramClamp).some((value) => !value)
	}

	return (
		<div className="h-screen flex flex-col gap-5 justify-center items-center bg-slate-900 text-slate-300 ">
			<h1 className="text-2xl">Font-size Clamp() Generator</h1>
			<div className="grid grid-cols-2 justify-items-center items-center gap-4 max-w-screen-md w-11/12">
				{Object.entries(paramClamp).map(([key, value]) => (
					<MemoInput
						key={key}
						name={key}
						inputValue={value}
						setValue={setParamClamp}
						placeholder="minWidth"
					/>
				))}
			</div>

			{allInputsFilled() && <ClampRender paramClamp={paramClamp} />}
		</div>
	)
}
