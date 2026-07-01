import {
  ArrowUpRight,
  Bell,
  ChevronDown,
  CircleHelp,
  Clock3,
  CreditCard,
  Download,
  Filter,
  Globe2,
  Grid2X2,
  HelpCircle,
  Landmark,
  Moon,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  Settings,
  Sun,
  Tag,
  Users,
  WalletCards,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navItems = ["Apercu", "Envoyer", "Recevoir", "Historique", "Contacts", "Parametres"]

const railItems = [
  { icon: Grid2X2, active: true, label: "Apercu" },
  { icon: Send, label: "Envoyer" },
  { icon: Download, label: "Recevoir" },
  { icon: Clock3, label: "Historique" },
  { icon: Users, label: "Contacts" },
  { icon: CreditCard, label: "Cartes" },
  { icon: Globe2, label: "Pays" },
  { icon: Settings, label: "Reglages" },
]

const wallets = [
  { name: "MTN MoMo", number: "+243 90 123 45 67", color: "bg-yellow-400 text-black" },
  { name: "Airtel Money", number: "+243 99 987 65 43", color: "bg-red-600 text-white" },
  { name: "Orange Money", number: "+243 85 111 22 33", color: "bg-primary text-primary-foreground" },
]

const stats = [
  {
    title: "Montant envoye",
    value: "85,000",
    suffix: "FCFA",
    trend: "+12% ce mois",
    icon: Send,
    hot: true,
  },
  {
    title: "Montant recu",
    value: "45,500",
    suffix: "FCFA",
    trend: "+6% ce mois",
    icon: Download,
  },
  {
    title: "Nombre de transactions",
    value: "24",
    suffix: "",
    trend: "+14% ce mois",
    icon: WalletCards,
  },
  {
    title: "Frais payes",
    value: "1,250",
    suffix: "FCFA",
    trend: "-5% ce mois",
    icon: Tag,
    down: true,
  },
]

const chart = [
  { month: "Jan", sent: 66, received: 38 },
  { month: "Fev", sent: 80, received: 24 },
  { month: "Mar", sent: 66, received: 17 },
  { month: "Avr", sent: 74, received: 30 },
  { month: "Mai", sent: 82, received: 29 },
  { month: "Juin", sent: 91, received: 46 },
  { month: "Juil", sent: 76, received: 32 },
  { month: "Aout", sent: 63, received: 20 },
]

const contacts = [
  { name: "Paul K.", method: "MTN MoMo", initials: "PK" },
  { name: "Grace M.", method: "Airtel Money", initials: "GM" },
  { name: "Junior", method: "Orange Money", initials: "JN" },
  { name: "Maman", method: "MTN MoMo", initials: "MA" },
]

const transactions = [
  { type: "out", name: "Paul K.", phone: "+243 90 123 45 67", method: "MTN MoMo", amount: "-10,000 FCFA", status: "Termine", date: "17 Juin, 2026 10:30" },
  { type: "in", name: "Grace M.", phone: "+243 99 987 65 43", method: "Airtel Money", amount: "+5,000 FCFA", status: "Recu", date: "16 Juin, 2026 18:45" },
  { type: "out", name: "Orange Senegal", phone: "+221 77 123 45 67", method: "Orange Money", amount: "-25,000 FCFA", status: "Termine", date: "16 Juin, 2026 14:20" },
  { type: "in", name: "Junior", phone: "+243 85 222 33 44", method: "MTN MoMo", amount: "+15,000 FCFA", status: "Recu", date: "15 Juin, 2026 19:10" },
  { type: "out", name: "Maman", phone: "+243 90 333 44 55", method: "Airtel Money", amount: "-8,000 FCFA", status: "En attente", date: "15 Juin, 2026 11:05" },
]

const rates = [
  { code: "USD", value: "587.25", trend: "+0.5%" },
  { code: "EUR", value: "634.58", trend: "+0.3%" },
  { code: "XOF", value: "1.00", trend: "0.0%" },
  { code: "CDF", value: "0.18", trend: "+0.8%" },
]

const countries = [
  ["RDC", "CDF"],
  ["Congo", "FCFA"],
  ["Senegal", "FCFA"],
  ["Cote d'Ivoire", "FCFA"],
  ["Gabon", "FCFA"],
]

function MiniLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid size-8 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
        <Landmark className="size-5" />
      </div>
      <span className="text-xl font-bold">
        <span className="text-primary">Swift</span>Pay
      </span>
    </div>
  )
}

function MethodMark({ name }: { name: string }) {
  const tone = name.includes("Airtel")
    ? "bg-red-600 text-white"
    : name.includes("Orange")
      ? "bg-primary text-primary-foreground"
      : "bg-yellow-400 text-black"

  return (
    <span className={cn("grid size-7 place-items-center rounded-lg text-[10px] font-bold", tone)}>
      {name.includes("Orange") ? "OM" : name.includes("Airtel") ? "AM" : "MTN"}
    </span>
  )
}

function MetricCard({
  title,
  value,
  suffix,
  trend,
  icon: Icon,
  hot,
  down,
}: (typeof stats)[number]) {
  return (
    <Card className={cn("min-h-36 justify-between border-0 shadow-none ring-1 ring-border/80", hot && "bg-primary text-primary-foreground ring-primary")}>
      <CardHeader className="flex-row items-start justify-between gap-3">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="size-5" />
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold leading-none">{value}</span>
          {suffix ? <span className="text-base leading-none">{suffix}</span> : null}
        </div>
        <p className={cn("mt-4 text-sm", hot ? "text-primary-foreground" : down ? "text-red-600" : "text-emerald-600")}>
          {trend}
        </p>
      </CardContent>
    </Card>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-muted p-3 text-foreground [letter-spacing:0]">
      <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-[1480px] overflow-hidden rounded-3xl bg-background ring-1 ring-border">
        <aside className="hidden w-[92px] shrink-0 flex-col items-center justify-between border-r border-border/60 py-6 lg:flex">
          <div className="space-y-8">
            <div className="grid gap-2 rounded-3xl border bg-card p-2">
              <Button size="icon" variant="ghost" className="rounded-2xl">
                <Sun className="size-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-2xl">
                <Moon className="size-5" />
              </Button>
            </div>
            <nav className="grid gap-2 rounded-3xl border bg-card p-2">
              {railItems.map((item) => (
                <Button
                  key={item.label}
                  size="icon"
                  variant={item.active ? "secondary" : "ghost"}
                  className={cn("rounded-2xl", item.active && "bg-secondary text-secondary-foreground shadow-sm")}
                  aria-label={item.label}
                >
                  <item.icon className="size-5" />
                </Button>
              ))}
            </nav>
          </div>
          <div className="grid gap-2 rounded-3xl border bg-card p-2">
            <Button size="icon" variant="ghost" className="rounded-2xl">
              <HelpCircle className="size-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-2xl">
              <ArrowUpRight className="size-5 rotate-180" />
            </Button>
          </div>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex min-h-24 items-center justify-between gap-4 px-5 py-4 lg:px-8">
            <MiniLogo />
            <nav className="hidden items-center gap-2 rounded-full bg-muted/60 p-1 md:flex">
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  variant={index === 0 ? "secondary" : "ghost"}
                  className={cn("rounded-full px-5", index === 0 && "bg-secondary text-secondary-foreground shadow-sm")}
                >
                  {item}
                </Button>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button size="icon-lg" variant="outline" className="rounded-2xl">
                <Search className="size-5" />
              </Button>
              <Button size="icon-lg" variant="outline" className="relative rounded-2xl">
                <Bell className="size-5" />
                <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
              </Button>
              <Button size="icon-lg" variant="outline" className="hidden rounded-2xl sm:inline-flex">
                <CircleHelp className="size-5" />
              </Button>
              <Button variant="outline" className="h-11 rounded-2xl pl-1 pr-3">
                <Avatar size="lg">
                  <AvatarFallback>DK</AvatarFallback>
                </Avatar>
                <span className="hidden text-left leading-tight sm:block">
                  <span className="block text-sm font-semibold">Dieuveil K.</span>
                  <span className="block text-xs text-muted-foreground">+243 97 654 32 10</span>
                </span>
                <ChevronDown className="size-4" />
              </Button>
            </div>
          </header>

          <div className="grid flex-1 gap-5 px-5 pb-5 lg:grid-cols-[1.02fr_1.9fr] lg:px-8">
            <section className="space-y-5">
              <div className="px-1">
                <h1 className="text-4xl font-bold">Bonjour, Dieuveil</h1>
                <p className="mt-2 text-muted-foreground">Envoyez et recevez de l&apos;argent partout en Afrique en toute simplicite.</p>
              </div>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardHeader className="flex-row items-center justify-between">
                  <CardTitle>Solde total</CardTitle>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    FCFA <ChevronDown className="size-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">120,500 FCFA</div>
                  <p className="mt-2 text-sm text-muted-foreground"><span className="text-emerald-600">+8%</span> par rapport au mois dernier</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Button className="h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Send className="size-5 text-primary" />
                      Envoyer de l&apos;argent
                    </Button>
                    <Button variant="outline" className="h-12 rounded-xl">
                      <Download className="size-5 text-primary" />
                      Recevoir de l&apos;argent
                    </Button>
                  </div>
                  <div className="mt-5 rounded-xl border bg-muted/30 p-3">
                    <div className="mb-3 flex items-center justify-between text-sm">
                      <span>Mes moyens de paiement <span className="text-muted-foreground">| 3 actifs</span></span>
                      <Button variant="ghost" size="sm">+ Ajouter</Button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {wallets.map((wallet) => (
                        <div key={wallet.name} className="rounded-xl border bg-background p-3">
                          <div className="flex items-center gap-2">
                            <span className={cn("grid size-7 place-items-center rounded-lg text-[10px] font-bold", wallet.color)}>
                              {wallet.name.split(" ")[0].slice(0, 3)}
                            </span>
                            <span className="text-xs font-medium">{wallet.name}</span>
                          </div>
                          <p className="mt-3 text-xs text-muted-foreground">{wallet.number}</p>
                          <p className="mt-1 text-xs text-emerald-600">Actif</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Limite d&apos;envoi mensuelle</h2>
                    <Button variant="ghost" size="sm">Modifier</Button>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-primary" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>450,000 FCFA utilise sur 1,000,000 FCFA</span>
                    <span>45%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold">Contacts favoris</h2>
                    <Button variant="ghost" size="sm">Voir tout</Button>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                    {contacts.map((contact) => (
                      <div key={contact.name} className="text-center">
                        <Avatar className="mx-auto size-12">
                          <AvatarFallback>{contact.initials}</AvatarFallback>
                        </Avatar>
                        <p className="mt-2 truncate text-sm font-medium">{contact.name}</p>
                        <p className="truncate text-xs text-muted-foreground">{contact.method}</p>
                      </div>
                    ))}
                    <div className="text-center">
                      <Button size="icon-lg" variant="outline" className="mx-auto size-12 rounded-full">
                        <Plus className="size-5" />
                      </Button>
                      <p className="mt-2 text-sm font-medium">Ajouter</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold">Taux de change</h2>
                    <Button variant="ghost" size="sm">Voir tout</Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {rates.map((rate) => (
                      <div key={rate.code} className="rounded-xl border bg-background p-3">
                        <p className="text-xs text-muted-foreground">{rate.code} {"->"} FCFA</p>
                        <p className="mt-2 text-xl font-semibold">{rate.value}</p>
                        <p className={cn("mt-1 text-xs", rate.trend.startsWith("+") ? "text-emerald-600" : "text-muted-foreground")}>{rate.trend}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-5">
              <div className="grid gap-5 xl:grid-cols-[1fr_1fr_2fr]">
                <div className="grid gap-5 sm:grid-cols-2 xl:col-span-2">
                  {stats.map((stat) => (
                    <MetricCard key={stat.title} {...stat} />
                  ))}
                </div>
                <Card className="shadow-none ring-1 ring-border/80">
                  <CardHeader className="flex-row items-start justify-between">
                    <CardTitle>Apercu des transactions</CardTitle>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Ce mois <ChevronDown className="size-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-5 flex gap-5 text-sm">
                      <span className="flex items-center gap-2"><span className="size-3 rounded bg-primary" /> Envoye</span>
                      <span className="flex items-center gap-2"><span className="size-3 rounded bg-secondary" /> Recu</span>
                    </div>
                    <div className="grid h-56 grid-cols-[36px_1fr] gap-3">
                      <div className="flex flex-col justify-between text-xs text-muted-foreground">
                        <span>100K</span>
                        <span>75K</span>
                        <span>50K</span>
                        <span>25K</span>
                        <span>0</span>
                      </div>
                      <div className="relative flex items-end justify-between gap-2 border-b border-border">
                        <div className="absolute inset-0 grid grid-rows-4 border-y border-dashed border-border/70" />
                        {chart.map((bar) => (
                          <div key={bar.month} className="relative z-10 flex h-full flex-1 flex-col justify-end gap-2">
                            <div className="flex h-[86%] items-end justify-center gap-2">
                              <span className="w-3 rounded-t bg-primary" style={{ height: `${bar.sent}%` }} />
                              <span className="w-3 rounded-t bg-secondary" style={{ height: `${bar.received}%` }} />
                            </div>
                            <span className="text-center text-xs text-muted-foreground">{bar.month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardHeader className="gap-3 md:flex-row md:items-center md:justify-between">
                  <CardTitle>Transactions recentes</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input className="h-9 w-52 rounded-xl pl-9" placeholder="Rechercher" />
                    </div>
                    <Button variant="outline" className="rounded-xl">
                      Filtrer <Filter className="size-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto rounded-xl border">
                    <div className="min-w-[820px]">
                    <div className="grid grid-cols-[72px_1.15fr_1fr_1fr_.9fr_1.2fr_40px] bg-muted px-4 py-3 text-sm text-muted-foreground">
                      <span>Type</span>
                      <span>Contact</span>
                      <span>Methode</span>
                      <span>Montant</span>
                      <span>Statut</span>
                      <span>Date</span>
                      <span />
                    </div>
                    {transactions.map((tx) => (
                      <div key={`${tx.name}-${tx.date}`} className="grid grid-cols-[72px_1.15fr_1fr_1fr_.9fr_1.2fr_40px] items-center border-t px-4 py-3 text-sm">
                        <span className={cn("grid size-9 place-items-center rounded-full", tx.type === "out" ? "bg-primary/10 text-primary" : "bg-muted text-foreground")}>
                          {tx.type === "out" ? <Send className="size-4" /> : <Download className="size-4" />}
                        </span>
                        <span>
                          <span className="block font-medium">{tx.name}</span>
                          <span className="text-xs text-muted-foreground">{tx.phone}</span>
                        </span>
                        <span className="flex items-center gap-2"><MethodMark name={tx.method} /> {tx.method}</span>
                        <span className={tx.amount.startsWith("+") ? "text-emerald-600" : "text-red-600"}>{tx.amount}</span>
                        <span className="flex items-center gap-2"><span className={cn("size-2 rounded-full", tx.status === "En attente" ? "bg-amber-500" : "bg-emerald-600")} /> {tx.status}</span>
                        <span className="text-muted-foreground">{tx.date}</span>
                        <Button size="icon-sm" variant="ghost"><MoreHorizontal className="size-4" /></Button>
                      </div>
                    ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none ring-1 ring-border/80">
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-semibold">Envoi rapide</h2>
                    <Button variant="ghost" size="sm">Voir tous les pays</Button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-6">
                    {countries.map(([country, currency], index) => (
                      <button key={country} className="flex items-center gap-3 rounded-xl border bg-muted/40 p-3 text-left transition hover:bg-muted">
                        <span className={cn("grid size-8 place-items-center rounded-lg text-xs font-bold text-white", ["bg-sky-600", "bg-emerald-600", "bg-yellow-500", "bg-orange-500", "bg-blue-600"][index])}>
                          {country.slice(0, 2).toUpperCase()}
                        </span>
                        <span>
                          <span className="block text-sm font-medium">{country}</span>
                          <span className="text-xs text-muted-foreground">{currency}</span>
                        </span>
                      </button>
                    ))}
                    <button className="flex items-center justify-center gap-2 rounded-xl border bg-muted/40 p-3 text-sm font-medium transition hover:bg-muted">
                      <Plus className="size-4" /> Ajouter
                    </button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
