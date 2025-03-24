import type { ColumnDef } from '@tanstack/react-table'
import { DataTableRowActions } from './data-table-row-actions'
import { env } from '@/env'
import parse from 'html-react-parser'

export type Moto = {
  id: string
  name: string
  description: string
  price: string
  brand: string
  model: string
  year: number
  km: string
  images: {
    id: string
    filename: string
    url: string
    path: string
  }[]
}

export const columns: ColumnDef<Moto>[] = [
  {
    accessorKey: 'images',
    header: 'Imagens',
    cell: ({ row }) => {
      const image = row.original.images[0]

      return (
        <img
          src={`${env.VITE_API_BASE_URL}/${image.url}`}
          alt={row.original.name}
          width={112}
          height={128}
          className="w-28 h-32 rounded-sm"
        />
      )
    },
  },
  { accessorKey: 'name', header: 'Nome' },
  {
    accessorKey: 'description',
    header: 'Descrição',
    cell: ({ row }) => (
      <div className="w-md truncate">{parse(row.original.description)}...</div>
    ),
  },
  { accessorKey: 'price', header: 'Preço' },
  { accessorKey: 'brand', header: 'Marca' },
  { accessorKey: 'model', header: 'Modelo' },
  { accessorKey: 'year', header: 'Ano' },
  { accessorKey: 'km', header: 'KM' },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const moto = row.original

      return <DataTableRowActions moto={moto} />
    },
  },
]
