 "use client"

import { usePathname } from "next/navigation"
import { BellIcon, CircleHelpIcon, SearchIcon } from "lucide-react"

import { swiftpayUser } from "@/lib/swiftpay-data"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"

const titles: Record<string, string> = {
  "/dashboard": "Aperçu",
  "/dashboard/envoyer": "Envoyer",
  "/dashboard/recevoir": "Recevoir",
  "/dashboard/historique": "Historique",
  "/dashboard/contacts": "Contacts",
  "/dashboard/parametres": "Paramètres",
}

export function SiteHeader() {
  const pathname = usePathname()
  const title = titles[pathname] ?? "SwiftPay"

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <SearchIcon />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <BellIcon />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <CircleHelpIcon />
            <span className="sr-only">Aide</span>
          </Button>
          <ModeToggle />
          <div className="hidden items-center gap-2 rounded-lg border bg-background px-2 py-1.5 md:flex">
            <Avatar size="sm">
              <AvatarImage src={swiftpayUser.avatar} alt={swiftpayUser.name} />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <div className="grid text-left text-xs leading-tight">
              <span className="font-medium">{swiftpayUser.name}</span>
              <span className="text-muted-foreground">{swiftpayUser.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
