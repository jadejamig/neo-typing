import { ClassValue } from 'clsx'

import { cn } from '../../lib/utils'

type Props = {
  className?: ClassValue
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Card({ className, children }: Props) {
  return (
    <div
      className={cn(
        'flex items-center rounded-base border-2 border-black px-4 py-2 text-sm font-base shadow-base',
        className,
      )}
    >
      {children}
    </div>
  )
} 