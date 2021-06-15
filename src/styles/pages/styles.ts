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

  .sign {
    font-size: 3rem;

    button {
      width: 100%;
      padding: 24px;
      font-size: 2.5rem;

      background-color: tomato;
    }
  }
`

export default Style
