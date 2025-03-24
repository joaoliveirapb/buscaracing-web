import { env } from '@/env'

interface CreateMotoRequest {
  name: string
  description: string
  price: string
  brand: string
  model: string
  year: string
  km: string
  images: FileList
}

export async function createMoto({
  name,
  description,
  price,
  brand,
  model,
  year,
  km,
  images,
}: CreateMotoRequest) {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('description', description)
  formData.append('price', price)
  formData.append('brand', brand)
  formData.append('model', model)
  formData.append('year', year)
  formData.append('km', km)
  formData.append('km', km)
  for (const image of images) {
    formData.append('images', image)
  }

  const response = await fetch(`${env.VITE_API_BASE_URL}/motos`, {
    method: 'POST',
    body: formData,
  })

  return response
}
