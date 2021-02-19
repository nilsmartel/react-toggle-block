import React from 'React'
import styles from './style.module.css'

interface ToggleBlockProps {
  elem: HTMLElement
  open?: boolean
}

export const ToggleBlock = (props: ToggleBlockProps) => {
  const open = props.open || false

  const [isOpen, setIsOpen] = React.useState(open)

  const elem = isOpen ? props.elem : null

  return <div>
    <input className={styles.toggleButton} type='button' onClick={() => setIsOpen(v => !v)} value='toggle'/>
    {elem}
  </div>
}
