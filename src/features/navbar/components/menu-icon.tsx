import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MenuIconProps {
  isOpen: boolean
}

export const MenuIcon = ({ isOpen }: MenuIconProps) => {
  return <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="xl" />
}
