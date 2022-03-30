import { RemSize } from '../config/variables';

export const getRemFromPixels = (value: number): string => `${value / RemSize.Default}rem`;
