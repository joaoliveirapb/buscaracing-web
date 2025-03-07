import { Sheet } from '@/components/ui/sheet'
import { Header } from './components/header'
import { CreateMoto } from './components/create-moto'
import { columns, type Moto } from './components/columns'
import { DataTable } from './components/data-table'

export function App() {
  const motosData: Moto[] = [
    {
      id: '1',
      name: 'MXF 270FX 2024',
      description:
        'Moto naked com excelente desempenho para uso urbano e viagens curtas.',
      price: 'R$ 26.450,00',
      brand: 'MXF',
      model: '270FX',
      year: 2024,
      km: '0 km',
      images: [
        {
          id: 'img1',
          filename: 'cb500f_front.jpg',
          url: 'https://buscaracing.com/assets/product/novas/8/1.jpeg',
          path: '/images/cb500f_front.jpg',
        },
        {
          id: 'img2',
          filename: 'cb500f_side.jpg',
          url: 'https://example.com/images/cb500f_side.jpg',
          path: '/images/cb500f_side.jpg',
        },
      ],
    },
    {
      id: '2',
      name: 'Yamaha WR 250F',
      description:
        'Moto ágil e estilosa, ideal para iniciantes e amantes de design moderno.',
      price: 'R$ 24.500,00',
      brand: 'Yamaha',
      model: 'WR 250F',
      year: 2011,
      km: '0 km',
      images: [
        {
          id: 'img3',
          filename: 'mt03_red.jpg',
          url: 'https://buscaracing.com/assets/product/678e41b1b2349-WhatsApp%20Image%202025-01-19%20at%2018.27.14%20(1).jpeg',
          path: '/images/mt03_red.jpg',
        },
      ],
    },
  ]

  return (
    <Sheet>
      <main className="container min-h-screen space-y-5">
        <Header />
        <DataTable columns={columns} data={motosData} />
      </main>

      <CreateMoto />
    </Sheet>
  )
}
