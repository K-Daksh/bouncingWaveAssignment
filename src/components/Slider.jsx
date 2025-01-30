import styled from "styled-components";

const Slider = ({ value, onChange, min, max, label, activeColor }) => {
  return (
    <StyledSlider $color={activeColor}>
      <label className="label">{label}</label>
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className="slider"
        />
        <div className="value">{value}</div>
      </div>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  padding: 12px;
  background: rgba(13, 12, 19, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(8px);

  .label {
    color: #8f9199;
    font-size: 0.875rem;
    margin-bottom: 0.8rem;
    display: block;
    font-weight: 500;
  }

  .slider-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .value {
    color: white;
    font-size: 0.875rem;
    min-width: 3ch;
    font-weight: 600;
  }

  .slider {
    -webkit-appearance: none;
    width: 200px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    outline: none;
    opacity: 0.7;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: ${(props) => props.$color || "#402fb5"};
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(207, 48, 170, 0.5);
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: ${(props) => props.$color || "#402fb5"};
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 15px rgba(207, 48, 170, 0.5);
      transition: all 0.2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default Slider;
