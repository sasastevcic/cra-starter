import type { ReportHandler } from 'web-vitals';

export default async function reportWebVitals(onPerfEntry?: ReportHandler): Promise<void> {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');

		getCLS(onPerfEntry);
		getFID(onPerfEntry);
		getFCP(onPerfEntry);
		getLCP(onPerfEntry);
		getTTFB(onPerfEntry);
	}
}
