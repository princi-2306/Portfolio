import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
      <div className='flex justify-between px-10 py-5'>
          
          <div>
              
          </div>
      <div><NavigationMenu>
  <NavigationMenuList className='flex gap-4 text-lg'>
    <NavigationMenuItem>
     Home
                  </NavigationMenuItem>
                  <NavigationMenuItem>
     Skills
    </NavigationMenuItem>
    <NavigationMenuItem>
      Projects
    </NavigationMenuItem>
    <NavigationMenuItem>
     About me
                  </NavigationMenuItem>
                  <NavigationMenuItem>
     Contact
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
          </div>
          </div>
  )
}

export default Navbar
