import { useState, useCallback, ReactElement, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { animate, variants } from '../../../styles/config/framer';
import { mapColors, TooltipProps, TooltipType } from './Tooltip.data';
import {
	StyledTooltip,
	StyledTooltipContent,
	StyledTooltipContainer,
	StyledArrow,
} from './Tooltip.styles';

const tooltipPortal = document.getElementById('tooltip') as HTMLElement;

export const Tooltip = ({
	text,
	placement = 'top',
	type = TooltipType.Default,
	offset = 10,
	children,
	...props
}: TooltipProps): ReactElement => {
	const [showTooltip, setShowTooltip] = useState(false);
	const [container, setContainer] = useState<HTMLDivElement | null>(null);
	const [popper, setPopper] = useState<HTMLDivElement | null>(null);

	const options = useMemo(
		() => ({
			placement,
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, offset],
					},
				},
			],
		}),
		[placement, offset],
	);

	const { styles, attributes, state } = usePopper(container, popper, options);

	const handleEnter = useCallback(() => {
		setShowTooltip(true);
	}, []);

	const handleLeave = useCallback(() => {
		setShowTooltip(false);
	}, []);

	const { backgroundColor, pointColor } = useMemo(
		() => ({
			backgroundColor: mapColors.primary[type],
			pointColor: mapColors.secondary[type],
		}),
		[type],
	);

	return (
		<StyledTooltipContainer
			data-testid="Tooltip"
			ref={setContainer}
			onPointerEnter={handleEnter}
			onPointerLeave={handleLeave}
			onFocus={handleEnter}
			onBlur={handleLeave}
		>
			{children}
			<AnimatePresence>
				{showTooltip && (
					<>
						{createPortal(
							<StyledTooltip ref={setPopper} style={styles.popper} {...attributes.popper}>
								<StyledTooltipContent
									$backgroundColor={backgroundColor}
									$pointColor={pointColor}
									{...animate(variants.fadeIn)}
									{...props}
								>
									{text}
									<StyledArrow $placement={state?.placement ?? placement} />
								</StyledTooltipContent>
							</StyledTooltip>,
							tooltipPortal,
						)}
					</>
				)}
			</AnimatePresence>
		</StyledTooltipContainer>
	);
};
