import { Breadcrumbs } from '@/components/common/breadcrumbs'
import { PomodoroTimer } from '@/components/pomodoro/page'

const Pomodoro = () => {
  return (
    <main className="p-12">
      <Breadcrumbs current="Pomodoro" />
      <PomodoroTimer />
    </main>
  )
}

export default Pomodoro
