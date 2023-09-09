import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.$type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  ${(props) => props?.$icon && `background-image: url('${props?.$icon}');`}
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: calc(100% - 6px) center;
  background-color: var(--color-grey-0);

  padding-right: 3rem;
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
