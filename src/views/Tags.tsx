import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
	font-size: 16px;
	background: #fff;
	>a >li {
		border-bottom: 1px solid #dddde0;
		padding: 12px 16px 12px 0;
		margin-left: 16px;
		display:flex;
		align-items: center;
		justify-content: space-between;
		>.icon {
			fill: #333;
		}
	}
`;

const Button = styled.button`
	border: none;
	color: #fff;
	font-size: 18px;
	background-color: #f60;
	border-radius: 4px;
	padding: 9px 14px;
	margin: 44px auto;
	display: block;
`;

function Tags() {
	const {tags} = useTags();
	return (
		<Layout>
			<TagList>
				{tags.map(tag =>
					<Link key={tag.id} to={'/tags/' + tag.id}>
						<li>
							<span className="oneLine">{tag.name}</span>
							<Icon name="right"/>
						</li>
					</Link>
				)}
			</TagList>
			<Button>新增标签</Button>
		</Layout>
	);
}

export default Tags;