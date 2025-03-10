import type { Moto } from './columns'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

interface DeleteMotoProps {
  moto: Moto
}

export function DeleteMoto({ moto }: DeleteMotoProps) {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          Esta ação não pode ser desfeita. Isso excluirá permanentemente essa
          moto e removerá os dados de nossos servidores.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction
          className={cn(buttonVariants({ variant: 'destructive' }))}
        >
          Deletar
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  )
}
