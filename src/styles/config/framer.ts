import { MotionProps, Transition, Variants } from 'framer-motion';
import { TransitionEase } from './variables';

type VariantLabels = 'visible' | 'hidden';

type TransitionType = 'fadeIn' | 'scaleIn';

type AnimateType = (
	variants: Variants,
	initial?: VariantLabels | false,
	animate?: VariantLabels,
	exit?: VariantLabels,
) => MotionProps;

export const transition: Transition = {
	easings: TransitionEase.Default,
	duration: 0.2,
};

export const variants: Record<TransitionType, Variants> = {
	fadeIn: {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	},
	scaleIn: {
		visible: {
			scale: 1,
		},
		hidden: {
			scale: 0.8,
		},
	},
};

export const animate: AnimateType = (
	variants,
	initial = 'hidden',
	animate = 'visible',
	exit = 'hidden',
) => ({
	variants,
	initial,
	animate,
	exit,
});
