import React from "react";
import styled from "styled-components";

const AppFooter = styled.footer`
  background-color: rgb(253, 253, 253);
  grid-row: 5;
  text-align: center;
  font-size: 0.75rem;
  color: gray;
  border-top: 1px solid rgba(200, 200, 200, 0.9);
`;

const Footer = () => (
  <AppFooter>
    Built with React by Nightcoder{" "}
    <span role="img" aria-label="sunglasses emoji">
      😎{" "}
    </span>
  </AppFooter>
);

export default Footer;

// import React from "react";
// import "./Footer.scss";

// const Footer = () => (
//   <div className="footer">
//     Built with React by Nightcoder&nbsp;
//     <span role="img" aria-label="sunglasses emoji">
//       {" "}
//       😎
//     </span>
//   </div>
// );

// export default Footer;
