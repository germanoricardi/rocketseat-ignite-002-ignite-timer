import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: calc(100vh - 8rem);
  margin: 2rem auto;
  max-width: 74rem;
  padding: 2rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
