import { useEffect, useState } from 'react'

import { ParamClampType } from '../App'

type ClampRenderProps = {
	paramClamp: ParamClampType
}

const root = document.querySelector('html') as HTMLElement
const pixelsPerRem = Number(getComputedStyle(root).fontSize.slice(0, -2))

export default function ClampRender({ paramClamp }: ClampRenderProps) {
	const [clamp, setClamp] = useState('')

	useEffect(() => {
		calcul()
	}, [paramClamp])

	const calcul = () => {
		const minWidth = paramClamp.minWidthValue / pixelsPerRem
		const maxWidth = paramClamp.maxWidthValue / pixelsPerRem
		const minFont = paramClamp.minFontValue / pixelsPerRem
		const maxFont = paramClamp.maxFontValue / pixelsPerRem

		const slope = (maxFont - minFont) / (maxWidth - minWidth)
		const yAxisIntersection = -minWidth * slope + minFont
		const yAxisIntersectionRender =
			yAxisIntersection !== 0 ? `${yAxisIntersection}rem +` : ''

		setClamp(
			`clamp(${minFont}rem, ${yAxisIntersectionRender} ${
				slope * 100
			}vw, ${maxFont}rem)`
		)
	}

	return <p>{clamp}</p>
}
