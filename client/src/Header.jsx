import { HamburgerIcon, AddIcon, TimeIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Text
  } from '@chakra-ui/react'

export default function Header({setShowLogin, user, setUser}){
    return (
        <header>
        <Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon boxSize={8}  color="white" />}
    variant='outline'
    padding={0}
  />
  <MenuList>
    {!user
    ? 
    <>
    <MenuItem icon={<AddIcon />} onClick={() => setShowLogin({show:true, page:'login'})}>
     Sign In
    </MenuItem>
    <MenuItem icon={<TimeIcon />} onClick={() => setUser(true)}>
      Wait Times
    </MenuItem>
    </>
    : <>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
    </>
    }
  </MenuList>
</Menu>
<Text fontSize='30px' pt={3} color="white">WaitFinder</Text>
<HamburgerIcon boxSize={8} color="#224f4f" />
</header>
    )
}