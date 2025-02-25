"use client"

import * as React from "react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <ModeToggle></ModeToggle>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

