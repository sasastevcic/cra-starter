import { ReactNode, ReactPortal, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface Portal {
	children: ReactNode;
	portalId: string;
}

const Portal = ({ children, portalId }: Portal): ReactPortal => {
	const portalElement = useMemo(() => document.getElementById(portalId), [portalId]);

	if (!portalElement) {
		throw new Error(`Element not found! Element id: ${portalId}`);
	}

	return createPortal(children, portalElement);
};

export default Portal;
