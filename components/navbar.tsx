"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-toggle"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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

