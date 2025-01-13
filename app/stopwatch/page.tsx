import { Breadcrumbs } from '@/components/common/breadcrumbs'
import { StopwatchTimer } from '@/components/stopwatch/page'

const Stopwatch = () => {
  return (
    <main className="p-12">
      <Breadcrumbs current="Stopwatch" />
      <StopwatchTimer />
    </main>
  )
}

export default Stopwatch
