import { CardComponent } from '@/components/common/card'

const Home = () => {
  return (
    <main className="p-12">
      <div className="flex gap-8 flex-wrap">
        <CardComponent
          title="Pomodoro"
          description="Boost productivity with timed work sessions."
        />
        <CardComponent
          title="Stopwatch"
          description="Measure elapsed time precisely."
        />
      </div>
    </main>
  )
}

export default Home
