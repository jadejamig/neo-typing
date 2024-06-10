import { ClassValue } from 'clsx'

import { cn } from '../../lib/utils'

type Props = {
  className?: ClassValue
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}

export default function Input({
  className,
  value,
  setValue,
  placeholder,
}: Props) {
  return (
    <input
      className={cn(
        'w-full rounded-base border-b-2 border-zinc-300 focus-visible:border-black p-[10px] font-base ring-offset-white focus-visible:outline-none outline-none transition-all',
        className,
      )}
      type="text"
      name="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      aria-label={placeholder}
    />
  )
}