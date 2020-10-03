import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type AccountItem = {
	tagIds: number[];
	note: string;
	category: '+' | '-';
	output: string;
}

export const useAccountItems = () => {
	const [accountItems, setAccountItems] = useState<AccountItem[]>([]);

	useEffect(() => {
		setAccountItems(JSON.parse(window.localStorage.getItem('accountItems') || '[]'));
	}, []);

	useUpdate(() => {
		window.localStorage.setItem('accountItems', JSON.stringify(accountItems));
	}, [accountItems]);

	const addAccountItems = (item: AccountItem) => {
		setAccountItems([...accountItems, item]);
	};

	return {accountItems, addAccountItems};
};