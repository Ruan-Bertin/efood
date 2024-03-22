import * as s from './styles'

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
      <s.ButtonCarrinho type="button" title={title} onClick={onClick}>
        {children}
      </s.ButtonCarrinho>
    )
  }

  return (
    <s.ButtonPerfil to={to as string} title={title}>
      {children}
    </s.ButtonPerfil>
  )
}

export default Button
