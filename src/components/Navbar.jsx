import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledWrapper>
      <ul className="example-1">
        <li className="icon-content">
          <a
            onClick={() => scrollToSection("home")}
            className="link"
            data-social="home"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="tooltip">Home</div>
        </li>
        <li className="icon-content">
          <a
            onClick={() => scrollToSection("bounce")}
            className="link"
            data-social="bounce"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 12H8.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 12H12.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 12H16.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <div className="tooltip">Task</div>
        </li>
        <li className="icon-content">
          <a
            href="https://github.com/K-Daksh"
            target="_blank"
            className="link"
            data-social="github"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 22.279C11.063 22.394 11.25 21.999 11.25 21.696V19.963C7.727 20.622 7.177 18.765 7.177 18.765C6.739 17.558 6.105 17.163 6.105 17.163C5.19 16.473 6.186 16.488 6.186 16.488C7.205 16.571 7.71 17.7 7.71 17.7C8.633 19.388 10.127 18.821 11.25 18.533C11.313 17.839 11.591 17.272 11.919 16.939C9.219 16.599 6.4 15.637 6.4 11.544C6.4 10.359 6.741 9.433 7.339 8.776C7.26 8.473 6.987 7.371 7.425 5.999C7.425 5.999 8.364 5.696 11.25 7.368C12.116 7.065 13.016 6.913 13.916 6.913C14.816 6.913 15.716 7.065 16.582 7.368C19.468 5.696 20.407 5.999 20.407 5.999C20.845 7.371 20.572 8.473 20.493 8.776C21.091 9.433 21.432 10.359 21.432 11.544C21.432 15.637 18.613 16.599 15.913 16.939C16.241 17.272 16.519 17.839 16.582 18.533C17.705 18.821 19.199 19.388 20.122 17.7C20.122 17.7 20.627 16.571 21.646 16.488C21.646 16.488 22.642 16.473 21.727 17.163C21.727 17.163 21.093 17.558 20.655 18.765C20.655 18.765 20.105 20.622 16.582 19.963V21.696C16.582 21.999 16.769 22.394 17.394 22.279C22.175 21.128 25.832 16.991 25.832 12C25.832 6.477 21.355 2 15.832 2H12Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 20px; // Changed from top to bottom
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  ul {
    list-style: none;
  }

  .example-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 3px 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }

  .icon-content {
    margin: 0 20px;
    position: relative;
  }

  .tooltip {
    position: absolute;
    top: 50px; // Changed from bottom to top
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 60px; // Changed from bottom to top, appears below icon
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #6f3eff; // Changed from #fff to #6f3eff
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .link svg {
    width: 20px;
    height: 20px;
  }

  .link:hover {
    transform: translateY(-2px);
    color: #6f3eff; // Changed from #fff to #6f3eff
  }
`;

export default Navbar;
