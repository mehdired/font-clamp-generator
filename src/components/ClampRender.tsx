import React, { useEffect, useState } from 'react'

type ClampRenderProps = {
	minWidthPx: number
	maxWidthPx: number
	minFontSize: number
	maxFontSize: number
}

export default function ClampRender({
	minWidthPx,
	maxWidthPx,
	minFontSize,
	maxFontSize
}: ClampRenderProps) {
	const [clamp, setClamp] = useState('')

	useEffect(() => {
		calcul()
	}, [minWidthPx, maxWidthPx, maxFontSize, minFontSize])

	const calcul = () => {
		const root = document.querySelector('html') as HTMLElement
		const pixelsPerRem = Number(
			getComputedStyle(root).fontSize.slice(0, -2)
		)

		const minWidth = minWidthPx / pixelsPerRem
		const maxWidth = maxWidthPx / pixelsPerRem
		const minFont = minFontSize / pixelsPerRem
		const maxFont = maxFontSize / pixelsPerRem

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

	if (!minWidthPx || !maxWidthPx || !maxFontSize || !minFontSize) {
		return null
	}

	return <p>{clamp}</p>
}
