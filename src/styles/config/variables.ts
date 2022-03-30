import { Ease } from './easing';

export enum FontFamily {
	Lato = 'Lato, sans-serif',
}

export enum FontWeight {
	Normal = 400,
	Bold = 700,
}

export enum RemSize {
	Default = 10,
}

export enum TextTransform {
	UpperCase = 'uppercase',
	LowerCase = 'lowercase',
	Capitalize = 'capitalize',
}

export enum TextAlign {
	Right = 'right',
	Left = 'left',
	Center = 'center',
	Justify = 'justify',
}

export enum BorderRadius {
	Small = '0.4rem',
	Medium = '0.8rem',
	Large = '1.2rem',
}

export enum TransitionEase {
	Default = Ease.OutSine,
}

export enum TransitionDuration {
	Fast = '100ms',
	Normal = '200ms',
	Slow = '300ms',
}

export enum Breakpoints {
	XSmall = 0,
	Small = 480,
	Medium = 768,
	Large = 1024,
	XLarge = 1440,
	XxLarge = 1640,
	XxxLarge = 1920,
}
