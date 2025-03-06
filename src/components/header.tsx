import { Button } from './ui/button'
import { SheetTrigger } from './ui/sheet'
import { Plus } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between h-24">
      <section className="space-y-1.5">
        <h1 className="font-display font-semibold text-3xl text-red-600 tracking-tight uppercase">
          Busca Racing{' '}
          <span className="text-lg text-zinc-900">/Back-Office</span>
        </h1>
        <p className="text-muted-foreground">
          Gerencie suas motos e acelere suas vendas.
        </p>
      </section>

      <section>
        <SheetTrigger asChild>
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus />
            Publicar moto
          </Button>
        </SheetTrigger>
      </section>
    </header>
  )
}
