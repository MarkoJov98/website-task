import React from "react";
import "../styles/Services.css";

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="service-item">
        <h3>Central Heating Installation</h3>
        <p>
          Our team specializes in the professional installation of central
          heating systems. We work with top-quality equipment and follow
          industry best practices to ensure efficient and reliable heating for
          your home or business.
        </p>
        <p>
          Whether you're upgrading your existing system or installing a new one,
          we provide tailored solutions that meet your specific needs and
          budget.
        </p>
      </div>
      <div className="service-item">
        <h3>Maintenance and Repair</h3>
        <p>
          Regular maintenance is essential for the longevity and efficiency of
          your heating system. Our skilled technicians offer comprehensive
          maintenance services to keep your system running smoothly.
        </p>
        <p>
          In case of any issues, we provide prompt and reliable repair services
          to address any problems and minimize downtime. Our goal is to ensure
          that your heating system operates at its best all year round.
        </p>
      </div>
      <div className="service-item">
        <h3>System Upgrades</h3>
        <p>
          Upgrading your heating system can lead to significant improvements in
          energy efficiency and comfort. We offer expert advice on the best
          upgrade options for your current system.
        </p>
        <p>
          From installing high-efficiency boilers to advanced control systems,
          we help you choose and implement upgrades that deliver enhanced
          performance and lower energy bills.
        </p>
      </div>
      <div className="service-item">
        <h3>Emergency Services</h3>
        <p>
          Heating emergencies can happen at any time. That's why we offer
          emergency services to address urgent issues and restore your heating
          system quickly.
        </p>
        <p>
          Our 24/7 emergency response team is ready to assist you whenever you
          need us, providing fast and effective solutions to ensure your home or
          business remains warm and comfortable.
        </p>
      </div>
    </div>
  );
};

export default Services;
