import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { ParamClampType } from '../App'

type Props = {
	setValue: Dispatch<SetStateAction<ParamClampType>>
	name: string
	inputValue: number
	placeholder: string
}

export default function Input({
	name,
	inputValue,
	placeholder,
	setValue
}: Props) {
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue((previous) => ({ ...previous, [name]: event.target.value }))
	}

	return (
		<input
			className="border border-gray-400 rounded flex-1 w-full px-3 py-1.5 bg-slate-900"
			type="text"
			value={inputValue}
			onChange={onChangeInput}
			placeholder={placeholder}
		/>
	)
}

export const MemoInput = React.memo(Input)
