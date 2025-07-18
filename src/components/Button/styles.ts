import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

type ButtonContainerProps = {
  $variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 2px solid
    ${(props) => (props.$variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.$variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
