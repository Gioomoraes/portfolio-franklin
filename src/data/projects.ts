import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'sponte-erp',
    title: 'Sponte ERP',
    description:
      'Implantação e suporte do sistema Sponte ERP, utilizado na gestão da instituição de ensino.',
    technologies: ['Sponte ERP'],
    category: 'sistema',
  },
  {
    id: 'infraestrutura-wifi',
    title: 'Infraestrutura Wi-Fi',
    description:
      'Implantação e manutenção da infraestrutura de Wi-Fi da instituição, incluindo uma rede específica para visitantes com acesso por voucher com duração de 1 dia.',
    technologies: ['Redes Wi-Fi', 'Voucher de acesso'],
    category: 'rede',
  },
  {
    id: 'sistema-cantina',
    title: 'Sistema de Cantina',
    description:
      'Desenvolvimento de um sistema para utilização na cantina da instituição por meio de tablets.',
    technologies: ['Tablets'],
    category: 'sistema',
  },
  {
    id: 'vlupt',
    title: 'Vlupt',
    description: 'Implantação e suporte do sistema Vlupt na instituição.',
    technologies: ['Vlupt'],
    category: 'sistema',
  },
  {
    id: 'classapp',
    title: 'ClassApp',
    description:
      'Implantação, suporte e utilização da plataforma ClassApp na instituição.',
    technologies: ['ClassApp'],
    category: 'sistema',
  },
  {
    id: 'infraestrutura-tecnologica',
    title: 'Infraestrutura Tecnológica',
    description:
      'Atuação sobre toda a infraestrutura tecnológica da instituição, incluindo computadores, impressoras, internet, câmeras, catracas, redes e equipamentos em geral.',
    technologies: [
      'Computadores',
      'Impressoras',
      'Câmeras',
      'Catracas',
      'Redes',
    ],
    category: 'infraestrutura',
  },
]