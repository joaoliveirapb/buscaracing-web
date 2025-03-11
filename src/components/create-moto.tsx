import { useState } from 'react'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { TipTap } from './tiptap'

export function CreateMoto() {
  const [content, setContent] = useState(
    '<p>Selecione este texto para ver o menu bolha!</p>'
  )

  return (
    <SheetContent className="!max-w-md">
      <SheetHeader>
        <SheetTitle>Publicar moto</SheetTitle>
        <SheetDescription>
          Preencha os detalhes da moto e clique em "Publicar" para adicioná-la
          ao seu catálogo. Certifique-se de revisar todas as informações antes
          de finalizar.
        </SheetDescription>
      </SheetHeader>

      <form className="flex flex-col gap-4 px-4 pb-4 h-[calc(100%-138px)]">
        <div className="flex-1 flex flex-col gap-4 pb-1 overflow-y-auto scrollbar-hidden">
          <section className="space-y-1.5">
            <Label>Nome</Label>
            <Input />
          </section>

          <section className="space-y-1.5">
            <Label>Descrição</Label>
            <TipTap content={content} setContent={setContent} />
          </section>

          <section className="space-y-1.5">
            <Label>Preço</Label>
            <Input />
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Marca</Label>
              <Input />
            </div>

            <div className="space-y-1.5">
              <Label>Modelo</Label>
              <Input />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Ano de fabricação</Label>
              <Input />
            </div>

            <div className="space-y-1.5">
              <Label>KM</Label>
              <Input />
            </div>
          </section>

          <section className="space-y-1.5">
            <Label>Imagens</Label>
            <Input type="file" multiple />
          </section>
        </div>

        <SheetClose asChild>
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Publicar
          </Button>
        </SheetClose>
      </form>
    </SheetContent>
  )
}
