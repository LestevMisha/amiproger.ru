// assets
import FirstSection from "./assets/components/sections/FirstSection";
import SecondSection from "./assets/components/sections/SecondSection";
import ThirdSection from "./assets/components/sections/ThirdSection";
import FourthSection from "./assets/components/sections/FourthSection";
import Modal from "./assets/components/modal/modal-window";
// styles
import "./assets/styles/style.css";
import "./assets/styles/modal.css";
// styled components
import { styled } from 'styled-components';
// react
import { React, useEffect } from "react";
// javascript
import { main } from "./assets/javascript/main"
import { setupModal } from "./assets/javascript/modal"

function App() {

  useEffect(() => {
    main();
    setupModal();
  });

  return (
    <Wrapper>
      {/* HTML5 */}
      <div className="abs_header"></div>
      <FirstSection />
      <div className="line"></div>
      <SecondSection />
      <ThirdSection />
      <div className="line"></div>
      <FourthSection />
      <div className="line" style={{transform: "translate(0, -5em)"}}></div>
      <Modal />
      {/* HTML5 <END> */}

    </Wrapper>
  );
}

const Wrapper = styled.div`
position: relative !important;
margin: 0px;
padding: 0px;
`;

export default App;
