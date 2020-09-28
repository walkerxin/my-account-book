import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
	{id: createId(), name: '衣'},
	{id: createId(), name: '食'},
	{id: createId(), name: '住'},
	{id: createId(), name: '行'}
];

const useTags = () => {
	const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
	const findTag = (tagId: number) => tags.filter(tag => tag.id === tagId)[0];
	const findTagIdx = (tagId: number) => {
		let result = -1;
		for (let i = 0; i < tags.length; i++) {
			if (tags[i].id === tagId) {
				result = i;
				break;
			}
		}
		return result;
	};

	const addTag = () => {
		const tagName = window.prompt('请输入你要新增的标签名称：');
		if (tagName && tagName.trim()) {
			setTags([...tags, {id: createId(), name: tagName.trim()}]);
		}
	};

	const updateTag = (tagId: number, {name: tagName}: { name: string }) =>
		setTags([...tags.filter(tag => tag.id !== tagId), {id: tagId, name: tagName}]);
	const deleteTag = (tagId: number) => setTags(tags.filter(tag => tag.id !== tagId));
	return {tags, setTags, findTag, findTagIdx, addTag, updateTag, deleteTag};
};

export {useTags};
