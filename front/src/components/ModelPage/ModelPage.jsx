import { Container } from '@mui/material'
import React from 'react'
import styles from './style.module.css'

export default function ModelPage() {
	return (
		<Container className={styles.myMainContainer} maxWidth="xl">
			<Container className={styles.myTopContainer} maxWidth="xl">
				<Container className={styles.myTopLeftContainer} maxWidth="xl">
					myTopLeftContainer
				</Container>
				<Container className={styles.myTopRightContainer} maxWidth="xl">
					<div>checkBox1</div>
					<div>checkBox1</div>
					<div>checkBox1</div>
				</Container>
			</Container>
			<div>Customers also bought these</div>
			<Container className={styles.myBottomContainer} maxWidth="xl">
				myBottomContainer
			</Container>
		</Container>
	)
}
