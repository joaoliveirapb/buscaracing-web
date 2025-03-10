import type { Moto } from './columns'
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface UpdateMotoProps {
  moto: Moto
}

export function UpdateMoto({ moto }: UpdateMotoProps) {
  return (
    <SheetContent className="!max-w-md">
      <SheetHeader>
        <SheetTitle>Editar moto</SheetTitle>
        <SheetDescription>
          Preencha os detalhes da moto e clique em "Editar" para atualizar as
          informações. Certifique-se de revisar todas as informações antes de
          finalizar.
        </SheetDescription>
      </SheetHeader>

      <form className="flex flex-col gap-4 px-4 pb-4 h-[calc(100%-138px)]">
        <div className="flex-1 flex flex-col gap-4 pb-1 overflow-y-auto scrollbar-hidden">
          <section className="space-y-1.5">
            <Label>Nome</Label>
            <Input value="MXF 270FX 2024" />
          </section>

          <section className="space-y-1.5">
            <Label>Descrição</Label>
            <Input value="Moto naked com excelente desempenho para uso urbano e viagens curtas." />
          </section>

          <section className="space-y-1.5">
            <Label>Preço</Label>
            <Input value="26.450,00" />
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Marca</Label>
              <Input value="MXF" />
            </div>

            <div className="space-y-1.5">
              <Label>Modelo</Label>
              <Input value="270FX" />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>Ano de fabricação</Label>
              <Input value="2024" />
            </div>

            <div className="space-y-1.5">
              <Label>KM</Label>
              <Input value="0 km" />
            </div>
          </section>

          <section className="space-y-1.5">
            <Label>Imagens</Label>
            <Input type="file" multiple />
          </section>
        </div>

        <SheetClose asChild>
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Editar
          </Button>
        </SheetClose>
      </form>
    </SheetContent>
  )
}
