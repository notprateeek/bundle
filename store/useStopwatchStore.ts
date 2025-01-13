import { create } from 'zustand'
import dayjs, { Dayjs } from 'dayjs'

type StopwachStore = {
  timerRunning: boolean
  timer: Dayjs
  timerInterval: NodeJS.Timeout | null
  laps: Dayjs[]

  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
  recordLap: () => void
}

export const useStopwatchStore = create<StopwachStore>((set, get) => ({
  timerRunning: false,
  timer: dayjs().hour(0).minute(0).second(0).millisecond(0),
  timerInterval: null,
  laps: [],

  startTimer: () => {
    const { timerRunning } = get()
    if (timerRunning) return

    const interval = setInterval(() => {
      const currentTime = get().timer
      set({ timer: currentTime.add(10, 'millisecond') })
    }, 10)

    set({ timerRunning: true, timerInterval: interval })
  },

  pauseTimer: () => {
    const { timerInterval } = get()
    if (timerInterval) clearInterval(timerInterval)
    set({ timerRunning: false, timerInterval: null })
  },

  resetTimer: () => {
    const { timerInterval } = get()
    if (timerInterval) clearInterval(timerInterval)

    set({
      timer: dayjs().hour(0).minute(0).second(0).millisecond(0),
      timerRunning: false,
      timerInterval: null,
    })

    set({ laps: [] })
  },

  recordLap: () => {
    const { timer, laps } = get()
    set({ laps: [...laps, timer] })
  },
}))
