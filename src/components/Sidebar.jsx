import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rick Inada" />
      <p className="title">Desenvolvedor Jr.</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://media.licdn.com/dms/image/D4D2DAQECox0Vy-h0fQ/profile-treasury-image-shrink_1920_1920/0/1686245069261?e=1687035600&v=beta&t=BzlzHVCer-YJrfT89qdYG-yBT7UB_Y0PxRnGdfWkAZk" target="_blank" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
