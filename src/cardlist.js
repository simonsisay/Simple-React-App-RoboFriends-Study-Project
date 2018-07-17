import React from 'react'
import Card from  './Card'

const CardList = ({ robots }) => {
	const robotArray = robots.map((robot, i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
	});
	return(
		<div>
			{robotArray}
		</div>
	)
}

export default CardList;