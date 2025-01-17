"use client";

import s from "./SecuritySection.module.scss";
import ServiceSecurityCardComponent from "@/components/service/ServiceSecurityCardComponent";
import MobileSliderComponent from "@/components/MobileSliderComponent";
import ServiceHeadingComponent from "@/components/service/ServiceHeadingComponent";
import classNames from "classnames";
import MainButtonComponent from "@/components/MainButtonComponent";
import BigButtonComponent from "../../../components/BigButtonComponent";
import Link from "next/link";

const securityCardsData = [
  {
    id: 1,
    title: "Discovery Stage",
    description:
      "When developing applications or websites, we pay great attention to protecting the customer's confidential information. We employ advanced encryption technologies to safeguard personal data and other sensitive information.",
  },
  {
    id: 2,
    title: "Protection",
    description:
      "During this stage, the focus is on understanding the client's needs and requirements. This involves conducting research, gathering information, and analyzing the client's business goals.",
  },
  {
    id: 3,
    title: "Security Measures",
    description:
      "We implement various security measures, such as protection against hacking attacks, software vulnerability protection, and abuse prevention. We regularly update systems and perform security audits to ensure the highest level of customer data protection.",
  },
  {
    id: 4,
    title: "Use of Secure Data Transmission Protocols",
    description:
      "We utilize secure data transmission protocols, such as HTTPS, to encrypt and protect information transmitted between users and the application or website. This helps prevent interception of information during transmission.",
  },
  {
    id: 5,
    title: "Reliable Servers and Hosting Providers",
    description:
      "We collaborate with trusted server and hosting providers that ensure a high level of data protection and system reliability. This helps minimize the risk of data loss or damage.",
  },
  
];

const SecuritySection = () => {
  return (
    <section className={s.security}>
      <ServiceHeadingComponent headingText="Security" />
      <div className={s.security__slider}>
        <MobileSliderComponent
          data={securityCardsData}
          SlideComponent={ServiceSecurityCardComponent}
        />
      </div>

      <div className={classNames(s.container, s.security__container)}>
        {securityCardsData.map((card) => (
          <ServiceSecurityCardComponent
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className={classNames(s.container, s.security__button)}>
        <BigButtonComponent/>
      </div>
      </section>
  );
};

export default SecuritySection;
