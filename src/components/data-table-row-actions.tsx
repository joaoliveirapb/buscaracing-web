import type { Moto } from './columns'
import { AlertDialog, AlertDialogTrigger } from './ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { DeleteMoto } from './delete-moto'
import { MoreHorizontal, Pencil, Trash2 } from 'lucide-react'

interface DataTableRowActionsProps {
  moto: Moto
}

export function DataTableRowActions({ moto }: DataTableRowActionsProps) {
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className="size-8 p-0">
            <span className="sr-only">Abrir menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Pencil />
            Editar
          </DropdownMenuItem>
          <AlertDialogTrigger className="w-full">
            <DropdownMenuItem variant="destructive">
              <Trash2 />
              Deletar
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteMoto moto={moto} />
    </AlertDialog>
  )
}
