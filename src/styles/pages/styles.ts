import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};

  svg {
    width: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default Style
