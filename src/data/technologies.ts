import { AppWindow, Network, ShieldCheck } from 'lucide-react'
import type { TechCategory } from '../types/technology'

export const technologyCategories: TechCategory[] = [
  {
    title: 'Sistemas',
    icon: AppWindow,
    items: ['Sponte ERP', 'ClassApp', 'Vlupt', 'Sistema de Cantina'],
  },
  {
    title: 'Infraestrutura',
    icon: Network,
    items: ['Redes', 'Wi-Fi', 'Internet', 'Computadores', 'Impressoras'],
  },
  {
    title: 'Segurança e Acesso',
    icon: ShieldCheck,
    items: ['Câmeras', 'Catracas', 'Controle de Acesso'],
  },
]