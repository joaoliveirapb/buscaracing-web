import { useQuery } from '@tanstack/react-query'
import { getMotos } from '@/http/get-motos'
import { Sheet } from '@/components/ui/sheet'
import { Header } from '@/components/header'
import { DataTable } from '@/components/data-table'
import { CreateMoto } from '@/components/create-moto'
import { columns } from '@/components/columns'

export function HomePage() {
  // const motosData: Moto[] = [
  //   {
  //     id: '1',
  //     name: 'MXF 270FX 2024',
  //     description:
  //       'Moto naked com excelente desempenho para uso urbano e viagens curtas.',
  //     price: 'R$ 26.450,00',
  //     brand: 'MXF',
  //     model: '270FX',
  //     year: 2024,
  //     km: '0 km',
  //     images: [
  //       {
  //         id: 'img1',
  //         filename: 'cb500f_front.jpg',
  //         url: 'https://buscaracing.com/assets/product/novas/8/1.jpeg',
  //         path: '/images/cb500f_front.jpg',
  //       },
  //       {
  //         id: 'img2',
  //         filename: 'cb500f_side.jpg',
  //         url: 'https://example.com/images/cb500f_side.jpg',
  //         path: '/images/cb500f_side.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     id: '2',
  //     name: 'Yamaha WR 250F',
  //     description:
  //       'Moto ágil e estilosa, ideal para iniciantes e amantes de design moderno.',
  //     price: 'R$ 24.500,00',
  //     brand: 'Yamaha',
  //     model: 'WR 250F',
  //     year: 2011,
  //     km: '0 km',
  //     images: [
  //       {
  //         id: 'img3',
  //         filename: 'mt03_red.jpg',
  //         url: 'https://buscaracing.com/assets/product/678e41b1b2349-WhatsApp%20Image%202025-01-19%20at%2018.27.14%20(1).jpeg',
  //         path: '/images/mt03_red.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     id: '3',
  //     name: 'Honda CRF 450R',
  //     description:
  //       'Moto off-road de alta performance, perfeita para competições e trilhas exigentes.',
  //     price: 'R$ 58.900,00',
  //     brand: 'Honda',
  //     model: 'CRF 450R',
  //     year: 2023,
  //     km: '120 km',
  //     images: [
  //       {
  //         id: 'img4',
  //         filename: 'crf450r_front.jpg',
  //         url: 'https://motociclismoonline.com.br/wp-content/uploads/2021/04/Honda-CRF-450R.jpeg',
  //         path: '/images/crf450r_front.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     id: '4',
  //     name: 'Kawasaki Ninja ZX-6R',
  //     description:
  //       'Esportiva com tecnologia de ponta, ideal para pistas e entusiastas de velocidade.',
  //     price: 'R$ 72.990,00',
  //     brand: 'Kawasaki',
  //     model: 'Ninja ZX-6R',
  //     year: 2025,
  //     km: '0 km',
  //     images: [
  //       {
  //         id: 'img6',
  //         filename: 'zx6r_green.jpg',
  //         url: 'https://kawasakiavantmotos.com.br/wp-content/uploads/2023/01/ninja-6r.png',
  //         path: '/images/zx6r_green.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     id: '5',
  //     name: 'Suzuki DR-Z400',
  //     description:
  //       'Moto versátil para uso misto, combinando conforto no asfalto e resistência em trilhas.',
  //     price: 'R$ 38.750,00',
  //     brand: 'Suzuki',
  //     model: 'DR-Z400',
  //     year: 2022,
  //     km: '450 km',
  //     images: [
  //       {
  //         id: 'img8',
  //         filename: 'drz400_yellow.jpg',
  //         url: 'https://motociclismoonline.com.br/wp-content/uploads/2024/11/drz4s__3_amarela.jpeg',
  //         path: '/images/drz400_yellow.jpg',
  //       },
  //     ],
  //   },
  //   {
  //     id: '6',
  //     name: 'BMW S 1000 RR',
  //     description:
  //       'Superbike premium com design agressivo e desempenho excepcional em alta velocidade.',
  //     price: 'R$ 125.000,00',
  //     brand: 'BMW',
  //     model: 'S 1000 RR',
  //     year: 2024,
  //     km: '0 km',
  //     images: [
  //       {
  //         id: 'img9',
  //         filename: 's1000rr_black.jpg',
  //         url: 'https://www.powerbmw.com.br/wp-content/uploads/Imagem-Capa-Motos.jpg',
  //         path: '/images/s1000rr_black.jpg',
  //       },
  //     ],
  //   },
  // ]

  const { data, isFetching } = useQuery({
    queryKey: ['get-motos'],
    queryFn: getMotos,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <Sheet>
      <main className="container h-screen space-y-4 pb-4 overflow-hidden">
        <Header />
        <DataTable columns={columns} data={data} isFetching={isFetching} />
      </main>

      <CreateMoto />
    </Sheet>
  )
}
