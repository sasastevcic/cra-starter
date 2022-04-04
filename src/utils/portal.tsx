import { ReactNode, ReactPortal, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface Portal {
	portalId: string;
	children: ReactNode;
}

const Portal = ({ portalId, children }: Portal): ReactPortal => {
	const portalElement = useMemo(() => document.getElementById(portalId), [portalId]);

	if (!portalElement) {
		throw new Error(`Element not found! Element id: ${portalId}`);
	}

	return createPortal(children, portalElement);
};

export default Portal;
