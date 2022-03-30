import { keyframes as sKeyframes } from 'styled-components';
import { OUTLINE_SIZE } from '../../components/atoms/Loader/Loader.config';

const rotate = sKeyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = sKeyframes`
  0% {
    stroke-dasharray: 0, ${OUTLINE_SIZE};
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: ${OUTLINE_SIZE / 2} ${OUTLINE_SIZE / 2};
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, ${OUTLINE_SIZE};
    stroke-dashoffset: -${OUTLINE_SIZE};
  }
`;

const wiggle = sKeyframes`
	0% { transform: rotate(1.5deg); }
	10% { transform: rotate(-1.5deg); }
	20% { transform: rotate(1deg); }
	30% { transform: rotate(-1deg); }
	40% { transform:rotate(0.7deg); }
	50% { transform: rotate(-0.7deg); }
	60% { transform:rotate(0.5deg); }
	70% { transform: rotate(-0.4deg); }
	80% { transform:rotate(0.2deg); }
	90% { transform:rotate(-0.1deg); }
	100% { transform: rotate(0deg); }
`;

export const keyframes = {
	rotate,
	dash,
	wiggle,
};
