import React from 'React'

interface ToggleBlockProps {
  elem: HTMLElement
  open?: boolean
}

export const ToggleBlock = (props: ToggleBlockProps) => {
  const open = props.open || false

  const [isOpen, setIsOpen] = React.useState(open)

  const elem = isOpen ? props.elem : null

  return <div>
    <input type='button' onClick={() => setIsOpen(v => !v)} />
    {elem}
  </div>
}
