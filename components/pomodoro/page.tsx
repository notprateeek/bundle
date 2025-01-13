'use client'

import { timerConfig, useTimerStore } from '@/store/useTimerStore'
import { TabContent } from '@/components/pomodoro/tabContent'
import { Button } from '@/components/ui/button'

export const PomodoroTimer = () => {
  const { currentTab, setTab } = useTimerStore()

  const tabs: Array<keyof typeof timerConfig> = [
    'focus',
    'shortBreak',
    'longBreak',
  ]

  const formatTabLabel = (str: string) => {
    const formattedString = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    return formattedString
      .split(' ')
      .map((word, index) =>
        index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word,
      )
      .join(' ')
  }

  const renderTabs = () => (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={currentTab === tab ? 'secondary' : 'ghost'}
          onClick={() => setTab(tab)}
          className={`tab-button ${currentTab === tab ? 'active' : ''}`}
        >
          {formatTabLabel(tab)}
        </Button>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-12">
      {renderTabs()}
      <TabContent />
    </div>
  )
}
