import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from '../useTags';

type Params = {
	tagId: string
}

const Tag: React.FC = () => {
	const {findTag} = useTags();
	const {tagId} = useParams<Params>();
	const currentTag = findTag(parseInt(tagId));
	return (
		<div>{currentTag ? currentTag.name : ''}</div>
	);
};

export {Tag};