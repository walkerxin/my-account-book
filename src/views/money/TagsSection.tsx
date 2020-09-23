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
	value: string[];
	onChange: (tags: string[]) => void;	// Function
}

const TagsSection: React.FC<Props> = (props) => {
	const {tags, setTags} = useTags()
	const selectedTags = props.value;
	console.log(props.children);

	function onAddTag() {
		const tagName = window.prompt('请输入你要新增的标签名称：');
		if (tagName && tagName.trim()) {
			setTags([...tags, tagName.trim()]);
		}
	}

	function onToggleTag(tag: string) {
		if (selectedTags.indexOf(tag) >= 0) {
			props.onChange(selectedTags.filter(selectedTag => selectedTag !== tag));
		} else {
			props.onChange([...selectedTags, tag]);
		}
	}

	return (
		<Wrapper>
			<ol>
				{tags.map(tag => <li key={tag}
														 className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
														 onClick={() => onToggleTag(tag)}>{tag}</li>)}
			</ol>
			<button onClick={onAddTag}>新增标签</button>
		</Wrapper>
	);
};

export {TagsSection};