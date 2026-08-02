import {
  ArrowDownToLineIcon,
  BellIcon,
  CheckCircle2Icon,
  CreditCardIcon,
  Globe2Icon,
  PlusIcon,
  SendIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  WalletIcon,
} from "lucide-react"

import {
  countries,
  favoriteContacts,
  paymentMethods,
  swiftpayUser,
} from "@/lib/swiftpay-data"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { TransactionsTable, SwiftPayPageHeader } from "@/components/swiftpay-overview"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const securitySettings = [
  {
    title: "Validation en deux étapes",
    description: "Demandée sur les nouveaux appareils",
    icon: ShieldCheckIcon,
  },
  {
    title: "Alertes de transaction",
    description: "Notification pour chaque mouvement",
    icon: BellIcon,
  },
  {
    title: "Vérification paiement",
    description: "Contrôle du PIN avant confirmation",
    icon: CheckCircle2Icon,
  },
]

export function SendMoneyPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <SwiftPayPageHeader
        title="Envoyer de l'argent"
        description="Transférez vers un contact ou un portefeuille mobile en quelques secondes."
        action={<Button className="gap-2"><SendIcon />Envoyer</Button>}
      />
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Nouveau transfert</CardTitle>
            <CardDescription>Choisissez le pays, le bénéficiaire et la méthode.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="send-country">Pays de destination</Label>
              <Select defaultValue="rdc">
                <SelectTrigger id="send-country">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.country} value={country.country.toLowerCase()}>
                      {country.flag} {country.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="recipient">Numéro ou contact</Label>
              <Input id="recipient" placeholder="+243 00 000 00 00" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="amount">Montant</Label>
              <Input id="amount" placeholder="25,000 FCFA" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="method">Méthode d'envoi</Label>
              <Select defaultValue="mtn">
                <SelectTrigger id="method">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN MoMo</SelectItem>
                  <SelectItem value="airtel">Airtel Money</SelectItem>
                  <SelectItem value="orange">Orange Money</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="h-11 gap-2">
              <SendIcon />
              Continuer
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Résumé estimé</CardTitle>
            <CardDescription>Frais et délai avant validation.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              ["Montant envoyé", "25,000 FCFA"],
              ["Frais SwiftPay", "350 FCFA"],
              ["Total débité", "25,350 FCFA"],
              ["Réception estimée", "Instantané"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-lg border p-3">
                <span className="text-sm text-muted-foreground">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
            <Separator />
            <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
              Le bénéficiaire reçoit une notification dès que le paiement est confirmé.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function ReceiveMoneyPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <SwiftPayPageHeader
        title="Recevoir de l'argent"
        description="Partagez vos coordonnées SwiftPay ou suivez les entrées récentes."
        action={<Button className="gap-2"><ArrowDownToLineIcon />Demander</Button>}
      />
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <Card>
          <CardHeader>
            <CardTitle>Compte de réception</CardTitle>
            <CardDescription>Coordonnées à partager avec vos proches.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="rounded-lg border bg-muted/30 p-4">
              <div className="text-sm text-muted-foreground">Titulaire</div>
              <div className="mt-1 text-xl font-semibold">{swiftpayUser.name}</div>
              <div className="mt-3 text-sm">{swiftpayUser.phone}</div>
            </div>
            {paymentMethods.map((method) => (
              <div key={method.provider} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <div className="font-medium">{method.provider}</div>
                  <div className="text-sm text-muted-foreground">{method.phone}</div>
                </div>
                <Badge variant="outline" className="text-emerald-600 dark:text-emerald-400">
                  {method.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Entrées récentes</CardTitle>
            <CardDescription>Les dernières réceptions sur votre compte.</CardDescription>
          </CardHeader>
          <CardContent>
            <TransactionsTable compact />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function HistoryPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <SwiftPayPageHeader
        title="Historique"
        description="Consultez, filtrez et vérifiez toutes vos opérations SwiftPay."
        action={<Button variant="outline" className="gap-2"><Globe2Icon />Exporter</Button>}
      />
      <Card>
        <CardHeader>
          <CardTitle>Toutes les transactions</CardTitle>
          <CardDescription>Vue consolidée des transferts envoyés et reçus.</CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionsTable />
        </CardContent>
      </Card>
    </div>
  )
}

export function ContactsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <SwiftPayPageHeader
        title="Contacts"
        description="Gardez vos bénéficiaires favoris prêts pour un envoi rapide."
        action={<Button className="gap-2"><UserPlusIcon />Ajouter</Button>}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {favoriteContacts.map((contact) => (
          <Card key={contact.name}>
            <CardHeader>
              <Avatar size="lg">
                <AvatarFallback>{contact.initials}</AvatarFallback>
              </Avatar>
              <CardAction>
                <Badge variant="outline">{contact.method}</Badge>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="font-medium">{contact.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{contact.phone}</div>
              <div className="mt-4 flex gap-2">
                <Button size="sm" className="gap-2"><SendIcon />Envoyer</Button>
                <Button size="sm" variant="outline">Détails</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6">
      <SwiftPayPageHeader
        title="Paramètres"
        description="Sécurité, méthodes de paiement et préférences du compte."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profil</CardTitle>
            <CardDescription>Informations visibles dans SwiftPay.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" defaultValue={swiftpayUser.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" defaultValue={swiftpayUser.phone} />
            </div>
            <Button className="w-fit">Enregistrer</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sécurité</CardTitle>
            <CardDescription>Contrôles recommandés pour protéger les fonds.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {securitySettings.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex items-center justify-between gap-4 rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-muted-foreground">{description}</div>
                  </div>
                </div>
                <Checkbox defaultChecked aria-label={title} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Moyens de paiement</CardTitle>
            <CardDescription>Portefeuilles actifs connectés à votre compte.</CardDescription>
            <CardAction>
              <Button variant="outline" size="sm" className="gap-2"><PlusIcon />Ajouter</Button>
            </CardAction>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-3">
            {paymentMethods.map((method) => (
              <div key={method.provider} className="flex items-center gap-3 rounded-lg border p-3">
                <CreditCardIcon className="size-5 text-muted-foreground" />
                <div>
                  <div className="font-medium">{method.provider}</div>
                  <div className="text-sm text-muted-foreground">{method.phone}</div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-lg border border-dashed p-3 text-muted-foreground">
              <WalletIcon className="size-5" />
              <span className="text-sm">Connecter un autre portefeuille</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
