import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import styles from './App.module.css'

const SingleColor = ({ rgb, weight, type, hexColor }) => {
	console.log(type)
	const rgbColor = rgb.join(',')
	const hexValue = `#${hexColor}`
	const weightValue = `${weight}%`
	return (
		<article
			className={styles.color}
			style={{ backgroundColor: `rgb(${rgbColor})` }}
		>
			<p style={{ color: type === 'shade' ? 'white' : '#063251' }}>
				{weightValue}
			</p>
			<p style={{ color: type === 'shade' ? 'white' : '#063251' }}>
				{hexValue}
			</p>
		</article>
	)
}

export default SingleColor
