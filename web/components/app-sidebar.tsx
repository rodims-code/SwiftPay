"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  ArrowDownToLineIcon,
  CircleHelpIcon,
  CommandIcon,
  CreditCardIcon,
  Globe2Icon,
  LayoutDashboardIcon,
  ReceiptTextIcon,
  SearchIcon,
  SendIcon,
  Settings2Icon,
  UsersIcon,
  WalletCardsIcon,
} from "lucide-react"

const data = {
  user: {
    name: "Dieuveil K.",
    email: "+243 97 654 32 10",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Aperçu",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Envoyer",
      url: "/dashboard/envoyer",
      icon: (
        <SendIcon
        />
      ),
    },
    {
      title: "Recevoir",
      url: "/dashboard/recevoir",
      icon: (
        <ArrowDownToLineIcon
        />
      ),
    },
    {
      title: "Historique",
      url: "/dashboard/historique",
      icon: (
        <ReceiptTextIcon
        />
      ),
    },
    {
      title: "Contacts",
      url: "/dashboard/contacts",
      icon: (
        <UsersIcon
        />
      ),
    },
  ],
  navClouds: [
    {
      title: "Portefeuilles",
      icon: (
        <WalletCardsIcon
        />
      ),
      isActive: true,
      url: "/dashboard/parametres",
      items: [
        {
          title: "MTN MoMo",
          url: "/dashboard/parametres",
        },
        {
          title: "Airtel Money",
          url: "/dashboard/parametres",
        },
      ],
    },
    {
      title: "Pays couverts",
      icon: (
        <Globe2Icon
        />
      ),
      url: "/dashboard/envoyer",
      items: [
        {
          title: "RDC",
          url: "/dashboard/envoyer",
        },
        {
          title: "Sénégal",
          url: "/dashboard/envoyer",
        },
      ],
    },
    {
      title: "Justificatifs",
      icon: (
        <ReceiptTextIcon
        />
      ),
      url: "/dashboard/historique",
      items: [
        {
          title: "Reçus récents",
          url: "/dashboard/historique",
        },
        {
          title: "Exports",
          url: "/dashboard/historique",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Paramètres",
      url: "/dashboard/parametres",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Aide",
      url: "#",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
    {
      title: "Recherche",
      url: "#",
      icon: (
        <SearchIcon
        />
      ),
    },
  ],
  documents: [
    {
      name: "Méthodes",
      url: "/dashboard/parametres",
      icon: (
        <CreditCardIcon
        />
      ),
    },
    {
      name: "Historique",
      url: "/dashboard/historique",
      icon: (
        <ReceiptTextIcon
        />
      ),
    },
    {
      name: "Pays rapides",
      url: "/dashboard/envoyer",
      icon: (
        <Globe2Icon
        />
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <CommandIcon className="size-5! text-primary" />
                <span className="text-base font-semibold">SwiftPay</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
