import {NavLink} from 'react-router-dom';
import Icon from './Icon';
import React from 'react';

type Props = {
	to: string,
	iconName: string,
	text: string
}

const LinkWrapper = (props : Props) => {
	return (
		<NavLink to={props.to} activeClassName="selected">
			<Icon name={props.iconName} />
			<span>{props.text}</span>
		</NavLink>
	)
}

export default LinkWrapper;