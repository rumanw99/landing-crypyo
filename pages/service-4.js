import FaqSection from "../components/common/faq/faq-section";
import BreadcrumbSection from "../components/service-4/breadcrumb-section";
import ChooseServiceSection from "../components/service-4/choose-service-section";
import InovativeServiceSection from "../components/service-4/inovative-service-section";
import ContactService4 from "../components/service-4/contact-service-4";
import PricingSectionOne from "./../components/common/pricing/pricing-section-one";

export default function ATMsandPOSMachines() {
	return (
		<>
			<BreadcrumbSection />
			<InovativeServiceSection />
			<ChooseServiceSection />
			<PricingSectionOne />
			<FaqSection />
			<ContactService4 />
		</>
	);
}
