import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';

const Wrapper = styled.section`
	background: #FFF;
	padding: 12px 16px;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-end;
	> ol {
		font-size: 14px;
		color: #484848;
		margin: 0 -12px;
		> li {
			background: #D9D9D9;
			border-radius: 18px;
			padding: 4px 18px;
			margin: 8px 12px;
			display: inline-block;
			&:hover {
				cursor: pointer;
			}
			&.selected {
				background: orange;
				color: white;
				font-weight: 700;
			}
		}
	}
	> button {
		border: none;
		background: none;
		border-bottom: 1px solid #666;
		padding: 1px 4px;
		color: #999;
		margin-top: 16px;
	}
`;

type Props = {
	value: number[];
	onChange: (tagIds: number[]) => void;	// Function
}

const TagsSection: React.FC<Props> = (props) => {
	const {tags, addTag} = useTags();
	const selectedTagIds = props.value;

	function onToggleTag(tagId: number) {
		if (selectedTagIds.indexOf(tagId) >= 0) {
			props.onChange(selectedTagIds.filter(selectedTagId => selectedTagId !== tagId));
		} else {
			props.onChange([...selectedTagIds, tagId]);
		}
	}

	return (
		<Wrapper>
			<ol>
				{tags.map(tag => <li key={tag.id}
														 className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
														 onClick={() => onToggleTag(tag.id)}>{tag.name}</li>)}
			</ol>
			<button onClick={addTag}>新增标签</button>
		</Wrapper>
	);
};

export {TagsSection};