import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, dependency: any[]) => {
	const countRef = useRef(0);
	useEffect(() => {
		countRef.current += 1;
	});

	useEffect(() => {
		if (countRef.current > 2) {
			fn && fn();
		}
	}, [dependency, fn]);
};

