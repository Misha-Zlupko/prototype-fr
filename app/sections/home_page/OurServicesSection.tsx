import s from "./OurServicesSection.module.scss";
import HeadingComponent from "@/components/HeadingComponent";
import EcommerceSection from "./EcommerceSection";
import CustomAppsSection from "./CustomAppsSection";
import WorkWithCustomersSection from "./WorkWithCustomersSection";
import TitleServicesComponent from "@/components/services/TitleServicesComponent";
import ServiceCardsComponent from "@/components/services/ServiceCardsComponent";
import pic from "../../../images/services/custom-apps/Apps.svg";
import pic2 from "../../../images/services/custom-apps/CustomAppDevelopment.svg";
import CustomAppsCardComponent from "@/components/services/CustomAppsCardComponent";
import OurServicesHeadingComponent from "@/components/services/OurServicesHeadingComponent";

const OurServicesSection = () => {
  return (
    <section className={s.services}>
      <OurServicesHeadingComponent />
      <EcommerceSection />
      <CustomAppsSection />
      <WorkWithCustomersSection />
    </section>
  );
};

export default OurServicesSection;
