import {Link} from 'react-router-dom';
import Icon from './Icon';
import React from 'react';

type Props = {
	to: string,
	iconName: string,
	text: string
}

const LinkWrapper = (props : Props) => {
	return (
		<Link to={props.to}>
			<Icon name={props.iconName} />
			<span>{props.text}</span>
		</Link>
	)
}

export default LinkWrapper;