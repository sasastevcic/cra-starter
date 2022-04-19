const layers = ['null', 'default', 'tooltip', 'overlay'] as const;

export const zIndex = (name: typeof layers[number] | 'negative'): number =>
	layers.findIndex((layer) => layer === name);
