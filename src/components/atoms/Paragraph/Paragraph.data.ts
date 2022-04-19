import type { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';
import { ColorType } from '../../../styles/config/theme';
import type { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';

export enum ParagraphType {
	Large = 'large',
	Normal = 'normal',
	Small = 'small',
}

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {
	as?: ElementType;
	type?: ParagraphType;
	fontWeight?: FontWeight;
	textTransform?: TextTransform;
	textAlign?: TextAlign;
	color?: ColorType;
	children: ReactNode;
}

export interface StyledParagraphProps {
	$type: ParagraphType;
	$fontWeight?: FontWeight;
	$textTransform?: TextTransform;
	$textAlign?: TextAlign;
	$color?: ColorType;
}
