import { Sheet } from '@/components/ui/sheet'
import { Header } from './components/header'
import { CreateMoto } from './components/create-moto'

export function App() {
  return (
    <Sheet>
      <main className="container min-h-screen">
        <Header />
      </main>

      <CreateMoto />
    </Sheet>
  )
}
