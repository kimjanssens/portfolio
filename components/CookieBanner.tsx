"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";

export default function CookieBanner() {
	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage("cookie_consent", null);

		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	const handleConsent = (consent: boolean) => {
		const newValue = consent ? "granted" : "denied";

		window.gtag("consent", "update", {
			analytics_storage: newValue,
		});

		setLocalStorage("cookie_consent", consent);
		setCookieConsent(consent);
	};

	return (
		<div
			role="dialog"
			className={classNames(
				"fixed bottom-0 inset-x-0 mx-auto max-w-xl w-full z-50",
				cookieConsent != null ? "hidden" : "flex"
			)}
		>
			<div className="relative h-auto p-4">
				<div className="bg-white rounded-lg drop-shadow">
					<div className="p-6 text-sm">
						<p className="mb-4">
							Deze website gebruikt de Google Analytics-trackingcode om
							automatisch, en anonieme identificatoren gegevens te verzamelen
							met behulp van browsercookies.
						</p>

						<div className="flex items-center">
							<button
								onClick={() => handleConsent(false)}
								type="button"
								className="text-xs font-medium tracking-wider uppercase text-black block border-2 border-solid border-black px-4 py-2 w-auto text-center mr-2"
							>
								Weigeren
							</button>
							<button
								onClick={() => handleConsent(true)}
								type="button"
								className="text-xs font-medium tracking-wider uppercase text-white bg-black block border-2 border-solid border-black px-4 py-2 w-auto text-center"
							>
								Accepteren
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
