import FaqSection from "../components/common/faq/faq-section";
import BreadcrumbSection from "../components/service-3/breadcrumb-section";
import ChooseServiceSection from "../components/service-3/choose-service-section";
import InovativeServiceSection from "../components/service-3/inovative-service-section";
import PricingSectionOne from "./../components/common/pricing/pricing-section-one";
import ContactService3 from "../components/service-3/contact-service-3";
export default function CryptoCards() {
	return (
		<>
			<BreadcrumbSection />
			<InovativeServiceSection />
			<ChooseServiceSection />
			<PricingSectionOne />
			<FaqSection />
			<ContactService3 />
		</>
	);
}
