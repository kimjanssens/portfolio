export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
	(window as any).gtag("config", GA_MEASUREMENT_ID, {
		page_path: url,
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
	action,
	category,
	label,
	value,
}: {
	action: string;
	category: string;
	label: string;
	value?: number;
}) => {
	(window as any).gtag("event", action, {
		event_category: category,
		event_label: label,
		value,
	});
};
