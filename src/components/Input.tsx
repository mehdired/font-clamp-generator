import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type Props = {
	setValue: Dispatch<SetStateAction<string>>
	inputValue: string
	placeholder: string
}

export default function Input({ inputValue, placeholder, setValue }: Props) {
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<input
			className="border border-gray-400 rounded"
			type="text"
			value={inputValue}
			onChange={onChangeInput}
			placeholder={placeholder}
		/>
	)
}
