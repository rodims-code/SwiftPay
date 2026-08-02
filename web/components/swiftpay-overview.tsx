"use client"

import type * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ArrowDownToLineIcon,
  ArrowUpRightIcon,
  CreditCardIcon,
  FilterIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
  TagsIcon,
  WalletCardsIcon,
} from "lucide-react"

import {
  countries,
  exchangeRates,
  favoriteContacts,
  monthlyFlow,
  paymentMethods,
  transactions,
} from "@/lib/swiftpay-data"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const chartConfig = {
  sent: {
    label: "Envoyé",
    color: "var(--primary)",
  },
  received: {
    label: "Reçu",
    color: "var(--foreground)",
  },
} satisfies ChartConfig

function ProviderMark({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md text-[10px] font-bold",
        className
      )}
    >
      {label}
    </span>
  )
}

function StatCard({
  title,
  value,
  icon,
  delta,
  tone = "text-emerald-600 dark:text-emerald-400",
  highlighted = false,
}: {
  title: string
  value: string
  icon: React.ReactNode
  delta: string
  tone?: string
  highlighted?: boolean
}) {
  return (
    <Card
      className={cn(
        "@container/card",
        highlighted &&
          "border-primary/20 bg-primary text-primary-foreground ring-primary/20"
      )}
    >
      <CardHeader>
        <CardDescription className={highlighted ? "text-primary-foreground/80" : ""}>
          {title}
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[260px]/card:text-3xl">
          {value}
        </CardTitle>
        <CardAction>{icon}</CardAction>
      </CardHeader>
      <CardContent
        className={cn(
          "text-sm",
          highlighted ? "text-primary-foreground/85" : "text-muted-foreground"
        )}
      >
        <span className={cn("font-medium", highlighted ? "text-primary-foreground" : tone)}>
          {delta}
        </span>{" "}
        ce mois
      </CardContent>
    </Card>
  )
}

export function SwiftPayOverview() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Bonjour, Dieuveil
        </h1>
        <p className="text-sm text-muted-foreground">
          Envoyez et recevez de l'argent partout en Afrique en toute simplicité.
        </p>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_1fr]">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Card className="lg:row-span-2">
            <CardHeader>
              <CardDescription>Solde total</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums">
                120,500 FCFA
              </CardTitle>
              <CardAction>
                <Select defaultValue="fcfa">
                  <SelectTrigger size="sm" className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fcfa">FCFA</SelectItem>
                    <SelectItem value="cdf">CDF</SelectItem>
                    <SelectItem value="usd">USD</SelectItem>
                  </SelectContent>
                </Select>
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <Badge variant="outline" className="w-fit text-emerald-600 dark:text-emerald-400">
                <ArrowUpRightIcon />
                8% par rapport au mois dernier
              </Badge>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button className="h-11 justify-center gap-2">
                  <SendIcon />
                  Envoyer de l'argent
                </Button>
                <Button variant="secondary" className="h-11 justify-center gap-2">
                  <ArrowDownToLineIcon />
                  Recevoir de l'argent
                </Button>
              </div>
              <div className="rounded-lg border p-3">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="text-sm font-medium">
                    Mes moyens de paiement
                    <span className="ml-2 text-muted-foreground">| 3 actifs</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <PlusIcon />
                    Ajouter
                  </Button>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {paymentMethods.map((method) => (
                    <div key={method.provider} className="rounded-lg border bg-muted/20 p-3">
                      <div className="flex items-center gap-2">
                        <ProviderMark label={method.initials} className={method.tone} />
                        <div className="min-w-0 text-sm font-medium">{method.provider}</div>
                      </div>
                      <div className="mt-3 text-xs text-muted-foreground">{method.phone}</div>
                      <div className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {method.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <StatCard
              title="Montant envoyé"
              value="85,000 FCFA"
              delta="+12%"
              highlighted
              icon={<SendIcon className="size-5" />}
            />
            <StatCard
              title="Montant reçu"
              value="45,500 FCFA"
              delta="+6%"
              icon={<ArrowDownToLineIcon className="size-5" />}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-start-2">
            <StatCard
              title="Transactions"
              value="24"
              delta="+14%"
              icon={<WalletCardsIcon className="size-5" />}
            />
            <StatCard
              title="Frais payés"
              value="1,250 FCFA"
              delta="-5%"
              tone="text-red-600 dark:text-red-400"
              icon={<TagsIcon className="size-5" />}
            />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Aperçu des transactions</CardTitle>
            <CardDescription>Volumes envoyés et reçus</CardDescription>
            <CardAction>
              <Select defaultValue="month">
                <SelectTrigger size="sm" className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Ce mois</SelectItem>
                  <SelectItem value="quarter">Trimestre</SelectItem>
                  <SelectItem value="year">Année</SelectItem>
                </SelectContent>
              </Select>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[310px] w-full">
              <BarChart data={monthlyFlow} accessibilityLayer>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${Number(value) / 1000}K`} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sent" fill="var(--color-sent)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="received" fill="var(--color-received)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.4fr]">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Limite d'envoi mensuelle</CardTitle>
              <CardAction>
                <Button variant="ghost" size="sm">Modifier</Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-[45%] rounded-full bg-primary" />
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span>450,000 FCFA utilisé sur 1,000,000 FCFA</span>
                <span className="font-medium">45%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacts favoris</CardTitle>
              <CardAction>
                <Button variant="ghost" size="sm">Voir tout</Button>
              </CardAction>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 sm:grid-cols-5">
              {favoriteContacts.map((contact) => (
                <div key={contact.name} className="flex flex-col items-center text-center">
                  <Avatar size="lg">
                    <AvatarFallback>{contact.initials}</AvatarFallback>
                  </Avatar>
                  <div className="mt-2 text-sm font-medium">{contact.name}</div>
                  <div className="text-xs text-muted-foreground">{contact.method}</div>
                </div>
              ))}
              <div className="flex flex-col items-center text-center">
                <Button size="icon" variant="secondary" className="size-10 rounded-full">
                  <PlusIcon />
                </Button>
                <div className="mt-2 text-sm font-medium">Ajouter</div>
                <div className="text-xs text-muted-foreground">Contact</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Taux de change</CardTitle>
              <CardAction>
                <Button variant="ghost" size="sm">Voir tout</Button>
              </CardAction>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {exchangeRates.map((rate) => (
                <div key={rate.pair} className="rounded-lg border p-3">
                  <div className="text-xs text-muted-foreground">{rate.pair}</div>
                  <div className="mt-2 text-xl font-semibold tabular-nums">{rate.value}</div>
                  <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{rate.delta}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Transactions récentes</CardTitle>
              <CardAction className="flex gap-2">
                <div className="relative hidden sm:block">
                  <SearchIcon className="pointer-events-none absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                  <Input className="h-9 w-56 pl-8" placeholder="Rechercher" />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <FilterIcon />
                  Filtrer
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <TransactionsTable />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Envoi rapide</CardTitle>
              <CardAction>
                <Button variant="ghost" size="sm">Voir tous les pays</Button>
              </CardAction>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {countries.map((country) => (
                <Button
                  key={country.country}
                  variant="secondary"
                  className="h-auto justify-start gap-3 px-3 py-3"
                >
                  <span className="text-xl">{country.flag}</span>
                  <span className="grid text-left text-sm leading-tight">
                    <span>{country.country}</span>
                    <span className="text-xs text-muted-foreground">{country.currency}</span>
                  </span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function TransactionsTable({
  compact = false,
}: {
  compact?: boolean
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Méthode</TableHead>
          <TableHead className="text-right">Montant</TableHead>
          {!compact && <TableHead>Statut</TableHead>}
          {!compact && <TableHead>Date</TableHead>}
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <span className="flex size-8 items-center justify-center rounded-full bg-muted">
                {transaction.type === "Reçu" ? (
                  <ArrowDownToLineIcon className="size-4" />
                ) : (
                  <SendIcon className="size-4 text-primary" />
                )}
              </span>
            </TableCell>
            <TableCell>
              <div className="font-medium">{transaction.contact}</div>
              <div className="text-xs text-muted-foreground">{transaction.phone}</div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <CreditCardIcon className="size-4 text-muted-foreground" />
                {transaction.method}
              </div>
            </TableCell>
            <TableCell className={cn("text-right font-medium", transaction.amountTone)}>
              {transaction.amount}
            </TableCell>
            {!compact && (
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn(
                    transaction.status === "En attente"
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-emerald-600 dark:text-emerald-400"
                  )}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            )}
            {!compact && <TableCell className="text-muted-foreground">{transaction.date}</TableCell>}
            <TableCell>
              <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontalIcon />
                <span className="sr-only">Options</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export function SwiftPayPageHeader({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {action}
    </div>
  )
}
