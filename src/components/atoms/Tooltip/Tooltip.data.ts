import { ReactNode } from 'react';
import { BasePlacement } from '@popperjs/core';
import { theme } from '../../../styles/config/theme';

export enum TooltipType {
	Default = 'default',
	Success = 'success',
	Error = 'error',
}

export interface TooltipProps {
	text: string;
	children: ReactNode;
	placement?: BasePlacement;
	type?: TooltipType;
	offset?: number;
}

export type ColorProps = {
	$backgroundColor: string;
	$pointColor: string;
};

export const mapColors: Record<'primary' | 'secondary', Record<TooltipType, string>> = {
	primary: {
		[TooltipType.Default]: theme.color.black,
		[TooltipType.Success]: theme.color.greenDark,
		[TooltipType.Error]: theme.color.redDark,
	},
	secondary: {
		[TooltipType.Default]: theme.color.blackFaded,
		[TooltipType.Success]: theme.color.green,
		[TooltipType.Error]: theme.color.red,
	},
};
