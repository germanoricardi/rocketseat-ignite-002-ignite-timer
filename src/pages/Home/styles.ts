import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const FormContainer = styled.div`
  align-items: center;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  flex-wrap: wrap;
  font-size: 1.125rem;
  font-weight: bold;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  height: 2.5rem;
  padding: 0 0.5rem;

  &:focus {
    border-color: ${(props) => props.theme['green-500']};
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  color: ${(props) => props.theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`
export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 4rem;
`
export const StartCountdownButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: ${(props) => props.theme['green-700']};
  }
`
