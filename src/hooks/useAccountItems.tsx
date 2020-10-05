import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type AccountItem = {
	tagIds: number[];
	note: string;
	category: '+' | '-';
	output: string;
	createAt: string
}

type AddedAccountItem = Omit<AccountItem, 'createAt'>

export const useAccountItems = () => {
	const [accountItems, setAccountItems] = useState<AccountItem[]>([]);

	useEffect(() => {
		setAccountItems(JSON.parse(window.localStorage.getItem('accountItems') || '[]'));
	}, []);

	useUpdate(() => {
		window.localStorage.setItem('accountItems', JSON.stringify(accountItems));
	}, [accountItems]);

	const addAccountItems = (item: AddedAccountItem) => {
		const amount = parseFloat(item.output as string);
		if (amount <= 0) {
			alert('请输入金额！');
			return false;
		} else if (!item.tagIds.length) {
			alert('请选择标签！');
			return false;
		}
		item.output = amount + '';
		setAccountItems([...accountItems, {...item, createAt: new Date().toISOString()}]);
		return true;
	};

	return {accountItems, addAccountItems};
};