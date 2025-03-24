import type { Moto } from '@/components/columns'
import { env } from '@/env'

export async function getMotos(): Promise<Moto[]> {
  const response = await fetch(`${env.VITE_API_BASE_URL}/motos`)
  const data = await response.json()

  return data.motos
}
