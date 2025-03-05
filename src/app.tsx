import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function App() {
  return (
    <Sheet>
      <main className="container min-h-screen">
        <header>
          <h1>Busca Racing</h1>
        </header>
        <SheetTrigger>Open</SheetTrigger>
      </main>
      <SheetContent className="!max-w-md">
        <SheetHeader>
          <SheetTitle>Publicar moto</SheetTitle>
          <SheetDescription>
            Preencha os detalhes da moto e clique em "Publicar" para adicioná-la
            ao seu catálogo. Certifique-se de revisar todas as informações antes
            de finalizar.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
