import {Link} from 'react-router-dom';
import Icon from './Icon';
import React from 'react';

type Props = {
	to: string,
	iconName: string,
	text: string
}

const NavLink = (props : Props) => {
	return (
		<Link to={props.to} className="linkWrapper">
			<Icon name={props.iconName} />
			<span>{props.text}</span>
		</Link>
	)
}

export default NavLink;