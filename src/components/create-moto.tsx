import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createMoto } from '@/http/create-moto'
import { useQueryClient } from '@tanstack/react-query'
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
import { TipTap } from './tiptap'
import { toast } from 'sonner'

const createMotoForm = z.object({
  name: z.string().min(1, 'Informe o nome da moto'),
  price: z.string().min(1, 'Informe o preço da moto'),
  brand: z.string().min(1, 'Informe a marca da moto'),
  model: z.string().min(1, 'Informe o modelo da moto'),
  year: z.string().min(1, 'Informe o ano da moto'),
  km: z.string().min(1, 'Informe o KM da moto'),
  images: z
    .any()
    .refine(files => files?.length > 0, 'Insira uma imagem para o artigo')
    .refine(
      files => files[0]?.type.startsWith('image/'),
      'O arquivo precisa ser uma imagem'
    ),
})

type CreateMotoForm = z.infer<typeof createMotoForm>

export function CreateMoto() {
  const queryClient = useQueryClient()
  const [content, setContent] = useState(
    '<p>Selecione este texto para ver o menu bolha!</p>'
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateMotoForm>({
    resolver: zodResolver(createMotoForm),
  })

  async function handleCreateMoto(data: CreateMotoForm) {
    const response = await createMoto({
      name: data.name,
      description: content,
      price: data.price,
      brand: data.brand,
      model: data.model,
      year: data.year,
      km: data.km,
      images: data.images,
    })

    if (!response.ok) {
      return toast.error('Não foi possível publicar a moto. Tente novamente.')
    }

    queryClient.invalidateQueries({ queryKey: ['get-motos'] })
    toast.success('Moto publicada com sucesso!')
    reset()
    setContent('<p>Selecione este texto para ver o Menu Bolha!</p>')
  }

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

      <form
        onSubmit={handleSubmit(handleCreateMoto)}
        className="flex flex-col gap-4 px-4 pb-4 h-[calc(100%-138px)]"
      >
        <div className="flex-1 flex flex-col gap-4 pb-1 overflow-y-auto scrollbar-hidden">
          <section className="space-y-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" {...register('name')} />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </section>

          <section className="space-y-1.5">
            <Label htmlFor="description">Descrição</Label>
            <TipTap content={content} setContent={setContent} />
          </section>

          <section className="space-y-1.5">
            <Label htmlFor="price">Preço</Label>
            <Input id="price" {...register('price')} />
            {errors.price && (
              <p className="text-red-400 text-sm">{errors.price.message}</p>
            )}
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="brand">Marca</Label>
              <Input id="brand" {...register('brand')} />
              {errors.brand && (
                <p className="text-red-400 text-sm">{errors.brand.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="model">Modelo</Label>
              <Input id="model" {...register('model')} />
              {errors.model && (
                <p className="text-red-400 text-sm">{errors.model.message}</p>
              )}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="year">Ano de fabricação</Label>
              <Input id="year" {...register('year')} />
              {errors.year && (
                <p className="text-red-400 text-sm">{errors.year.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="km">KM</Label>
              <Input id="km" {...register('km')} />
              {errors.km && (
                <p className="text-red-400 text-sm">{errors.km.message}</p>
              )}
            </div>
          </section>

          <section className="space-y-1.5">
            <Label htmlFor="images">Imagens</Label>
            <Input id="images" type="file" multiple {...register('images')} />
            {errors.images && (
              <p className="text-red-400 text-sm">
                {String(errors.images.message)}
              </p>
            )}
          </section>
        </div>

        <SheetClose asChild>
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publicando...' : 'Publicar'}
          </Button>
        </SheetClose>
      </form>
    </SheetContent>
  )
}
