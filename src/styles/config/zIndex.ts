const map = ['null', 'default', 'tooltip', 'overlay'] as const;

export const zIndex = (name: typeof map[number] | 'negative'): number =>
	map.findIndex((itemName) => itemName === name);
