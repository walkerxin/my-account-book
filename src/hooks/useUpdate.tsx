import {useEffect, useRef} from 'react';

export const useUpdate = (fn: () => void, deps: any[]) => {
	const countRef = useRef(0);
	useEffect(() => {
		countRef.current += 1;
	});

	useEffect(() => {
		if (countRef.current > 1) {
			fn && fn();
		}
	}, deps);
};

