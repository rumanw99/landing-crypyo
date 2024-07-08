import FaqSection from "../components/common/faq/faq-section";
import BreadcrumbSection from "../components/service-2/breadcrumb-section";
import ChooseServiceSection from "../components/service-2/choose-service-section";
import InovativeServiceSection from "../components/service-2/inovative-service-section";
import ContactService2 from "../components/service-2/contact-service-2";
import PricingSectionOne from "./../components/common/pricing/pricing-section-one";

export default function PaymentGateways() {
	return (
		<>
			<BreadcrumbSection />
			<InovativeServiceSection />
			<ChooseServiceSection />
			<PricingSectionOne />
			<FaqSection />
			<ContactService2 />
		</>
	);
}
