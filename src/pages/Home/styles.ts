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

export const BaseCountdownButton = styled.button`
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  width: 100%;

  align-items: center;
  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['gray-100']};

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background: ${(props) => props.theme['red-700']};
  }
`
