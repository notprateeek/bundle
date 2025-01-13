import { create } from 'zustand'
import dayjs, { Dayjs } from 'dayjs'

type TimerConfig = {
  focus: { minutes: number }
  shortBreak: { minutes: number }
  longBreak: { minutes: number }
}

export const timerConfig: TimerConfig = {
  focus: { minutes: 25 },
  shortBreak: { minutes: 5 },
  longBreak: { minutes: 15 },
}

type TimerStore = {
  currentTab: keyof TimerConfig
  showControls: boolean
  timerRunning: boolean
  timer: Dayjs
  timerInterval: NodeJS.Timeout | null

  setTab: (tab: keyof TimerConfig) => void
  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void
  incrementMinutes: (value: number) => void
}

const createInitialTimer = (tab: keyof TimerConfig) => {
  const { minutes } = timerConfig[tab]
  return dayjs().hour(0).minute(minutes).second(0)
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  currentTab: 'focus',
  showControls: true,
  timerRunning: false,
  timer: createInitialTimer('focus'),
  timerInterval: null,

  setTab: (tab) => {
    set({
      currentTab: tab,
      timer: createInitialTimer(tab),
      timerRunning: false,
      showControls: true,
      timerInterval: null,
    })
  },

  startTimer: () => {
    const { timerRunning } = get()
    if (timerRunning) return

    const interval = setInterval(() => {
      const currentTime = get().timer

      if (currentTime.second() === 0 && currentTime.minute() === 0) {
        clearInterval(interval)
        set({ timerRunning: false, timerInterval: null })
      } else {
        set({ timer: currentTime.subtract(1, 'second') })
      }
    }, 1000)

    set({ timerRunning: true, timerInterval: interval, showControls: false })
  },

  pauseTimer: () => {
    const { timerInterval } = get()
    if (timerInterval) clearInterval(timerInterval)
    set({ timerRunning: false, timerInterval: null })
  },

  resetTimer: () => {
    const { currentTab, timerInterval } = get()
    if (timerInterval) clearInterval(timerInterval)

    set({
      timer: createInitialTimer(currentTab),
      timerRunning: false,
      timerInterval: null,
      showControls: true,
    })
  },

  incrementMinutes: (value: number) => {
    set((state) => {
      const newMinutes = state.timer.minute() + value
      return {
        timer: state.timer.set('minute', newMinutes),
      }
    })
  },
}))
