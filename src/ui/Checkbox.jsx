import styled from "styled-components";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
    color: var(--color-brand-50);
    cursor: pointer;

    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    border: 1px solid var(--color-brand-600);
    border-radius: 4px;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;

    display: grid;
  }

  & input[type="checkbox"]:checked {
    background-color: var(--color-brand-600);
    display: red;
  }

  & input[type="checkbox"]:checked::before {
    background-color: #fff;
    margin: 4px;

    content: "";
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  & input[type="checkbox"]:disabled {
    background-color: var(--color-grey-400);
    accent-color: var(--color-brand-600);
    border: none;
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
