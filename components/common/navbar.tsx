import { ModeToggle } from '@/components/common/modeToggle'
import { Separator } from '@/components/ui/separator'

export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between p-4">
        <h1 className="text-3xl font-black">Bundle</h1>
        <ModeToggle />
      </header>
      <Separator />
    </>
  )
}
