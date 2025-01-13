import { Separator } from '@/components/ui/separator'
import { useTimerStore } from '@/store/useTimerStore'
import { Button } from '@/components/ui/button'

export const TabContent = () => {
  const {
    timer,
    timerRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    incrementMinutes,
  } = useTimerStore()

  const timerDisplay =
    timer.hour() > 0 ? timer.format('HH:mm:ss') : timer.format('mm:ss')

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <span className="text-9xl font-black">{timerDisplay}</span>
        <Separator />
      </div>

      <div className="button-container">
        <Button variant="spotlight" onClick={() => incrementMinutes(1)}>
          +1 Min
        </Button>
        <Button variant="spotlight" onClick={() => incrementMinutes(5)}>
          +5 Min
        </Button>
        <Button variant="spotlight" onClick={() => incrementMinutes(10)}>
          +10 Min
        </Button>
        <Button variant="spotlight" onClick={() => incrementMinutes(10)}>
          +25 Min
        </Button>
      </div>

      <div className="flex gap-4">
        <Button
          variant="secondary"
          onClick={timerRunning ? pauseTimer : startTimer}
        >
          {timerRunning ? 'Pause' : 'Start'}
        </Button>
        <Button variant="secondary" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  )
}
