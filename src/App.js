import React, { useState } from 'react'
import SingleColor from './SingleColor'
import styles from './App.module.css'
import Values from 'values.js'

function App() {
	const [color, setColor] = useState('')
	const [list, setList] = useState(new Values('#f15025').all(10))

	console.log(list)
	const handleSubmit = (e) => {
		e.preventDefault()
		try {
			let colors = new Values(color).all(10)
			setList(colors)
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (e) => {
		setColor(e.target.value)
	}

	return (
		<>
			<section className={styles['section-choice']}>
				<div className={styles['choice-container']}>
					<h1 className={styles.title}>color generator</h1>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={color}
							placeholder="#f15025"
							className={styles.input}
							onChange={handleChange}
						/>
						<button type="submit" className={styles.btn}>
							submit
						</button>
					</form>
				</div>
			</section>
			<section className={styles['section-colors']}>
				{list.map((color, index) => (
					<SingleColor {...color} key={index} hexColor={color.hex} />
				))}
			</section>
		</>
	)
}

export default App
