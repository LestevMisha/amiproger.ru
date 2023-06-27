// assets
import FirstSection from "./assets/components/sections/FirstSection";
import SecondSection from "./assets/components/sections/SecondSection";
import ThirdSection from "./assets/components/sections/ThirdSection";
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

    // Marquee width
    const targetNode = document.querySelector('#marquee .b-text');
    const computedStyle = getComputedStyle(targetNode);
    setTimeout(() => {
      const width = targetNode.offsetWidth +
        parseInt(computedStyle.marginLeft) +
        parseInt(computedStyle.marginRight);
      document.getElementById("marquee").style.width = `${width * 2 + 16}px`;
    }, 100);
    // Marquee width <END>

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
