export const swiftpayUser = {
  name: "Dieuveil K.",
  phone: "+243 97 654 32 10",
  email: "dieuveil@swiftpay.app",
  avatar: "/avatars/shadcn.jpg",
}

export const paymentMethods = [
  {
    provider: "MTN MoMo",
    phone: "+243 90 123 45 67",
    status: "Actif",
    tone: "bg-yellow-400 text-black",
    initials: "MTN",
  },
  {
    provider: "Airtel Money",
    phone: "+243 99 987 65 43",
    status: "Actif",
    tone: "bg-red-500 text-white",
    initials: "AM",
  },
  {
    provider: "Orange Money",
    phone: "+243 85 111 22 33",
    status: "Actif",
    tone: "bg-orange-500 text-white",
    initials: "OM",
  },
]

export const favoriteContacts = [
  {
    name: "Paul K.",
    method: "MTN MoMo",
    phone: "+243 90 123 45 67",
    initials: "PK",
  },
  {
    name: "Grace M.",
    method: "Airtel Money",
    phone: "+243 99 987 65 43",
    initials: "GM",
  },
  {
    name: "Junior",
    method: "Orange Money",
    phone: "+243 85 222 33 44",
    initials: "JR",
  },
  {
    name: "Maman",
    method: "MTN MoMo",
    phone: "+243 90 333 44 55",
    initials: "MM",
  },
]

export const transactions = [
  {
    id: "TRX-240617-01",
    type: "Envoyé",
    contact: "Paul K.",
    phone: "+243 90 123 45 67",
    method: "MTN MoMo",
    amount: "-10,000 FCFA",
    amountTone: "text-red-600 dark:text-red-400",
    status: "Terminé",
    date: "17 Juin, 2026 10:30",
  },
  {
    id: "TRX-240616-04",
    type: "Reçu",
    contact: "Grace M.",
    phone: "+243 99 987 65 43",
    method: "Airtel Money",
    amount: "+5,000 FCFA",
    amountTone: "text-emerald-600 dark:text-emerald-400",
    status: "Reçu",
    date: "16 Juin, 2026 18:45",
  },
  {
    id: "TRX-240616-03",
    type: "Envoyé",
    contact: "Orange Sénégal",
    phone: "+221 77 123 45 67",
    method: "Orange Money",
    amount: "-25,000 FCFA",
    amountTone: "text-red-600 dark:text-red-400",
    status: "Terminé",
    date: "16 Juin, 2026 14:20",
  },
  {
    id: "TRX-240615-02",
    type: "Reçu",
    contact: "Junior",
    phone: "+243 85 222 33 44",
    method: "MTN MoMo",
    amount: "+15,000 FCFA",
    amountTone: "text-emerald-600 dark:text-emerald-400",
    status: "Reçu",
    date: "15 Juin, 2026 19:10",
  },
  {
    id: "TRX-240615-01",
    type: "Envoyé",
    contact: "Maman",
    phone: "+243 90 333 44 55",
    method: "Airtel Money",
    amount: "-8,000 FCFA",
    amountTone: "text-red-600 dark:text-red-400",
    status: "En attente",
    date: "15 Juin, 2026 11:05",
  },
]

export const monthlyFlow = [
  { month: "Jan", sent: 66000, received: 38000 },
  { month: "Fév", sent: 80000, received: 24000 },
  { month: "Mar", sent: 66000, received: 16000 },
  { month: "Avr", sent: 74000, received: 30000 },
  { month: "Mai", sent: 82000, received: 30000 },
  { month: "Juin", sent: 91000, received: 23000 },
  { month: "Juil", sent: 76000, received: 32000 },
  { month: "Août", sent: 62000, received: 20000 },
]

export const countries = [
  { country: "RDC", currency: "FCFA", flag: "🇨🇩" },
  { country: "Congo", currency: "FCFA", flag: "🇨🇬" },
  { country: "Sénégal", currency: "FCFA", flag: "🇸🇳" },
  { country: "Côte d'Ivoire", currency: "FCFA", flag: "🇨🇮" },
  { country: "Gabon", currency: "FCFA", flag: "🇬🇦" },
]

export const exchangeRates = [
  { pair: "USD -> FCFA", value: "587.25", delta: "+0.5%" },
  { pair: "EUR -> FCFA", value: "634.58", delta: "+0.3%" },
  { pair: "XOF -> FCFA", value: "1.00", delta: "0.0%" },
  { pair: "CDF -> FCFA", value: "0.18", delta: "+0.8%" },
]
