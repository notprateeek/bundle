'use client'

import { useStopwatchStore } from '@/store/useStopwatchStore'
import { Button } from '@/components/ui/button'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

export const StopwatchTimer = () => {
  const {
    timerRunning,
    timer,
    laps,
    startTimer,
    pauseTimer,
    resetTimer,
    recordLap,
  } = useStopwatchStore()

  return (
    <>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border min-h-[80vh] h-[80vh] max-h-[80vh]"
      >
        <ResizablePanel defaultSize={70} className="m-auto">
          <div className="flex flex-col items-center justify-center p-12">
            <span className="text-9xl font-black">
              {timer.format('ss:SSS')}
            </span>
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
              <Button variant="secondary" onClick={recordLap}>
                Lap
              </Button>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} className="!overflow-scroll">
          <div className="flex flex-col items-center justify-center gap-4 p-12">
            {laps
              .slice()
              .reverse()
              .map((lap, index) => (
                <p
                  key={laps.length - index - 1}
                  className="w-full flex justify-between"
                >
                  <span className="text-base text-slate-500">
                    Lap {laps.length - index}
                  </span>
                  <span className="text-base font-bold">
                    {lap.format('ss:SSS')}
                  </span>
                </p>
              ))}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="flex flex-col items-center gap-8"></div>
    </>
  )
}
