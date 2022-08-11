import { GET } from "./http";

export function loadLandingPage(url) {
	return GET(`/api/v1/landingPage?content=${url}`);
}

export default loadLandingPage;
