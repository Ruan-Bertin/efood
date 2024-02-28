import { ButtonPerfil, ButtonCarrinho } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonCarrinho type="button" title={title} onClick={onClick}>
        {children}
      </ButtonCarrinho>
    )
  }

  return (
    <ButtonPerfil to={to as string} title={title}>
      {children}
    </ButtonPerfil>
  )
}

export default Button
