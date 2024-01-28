import { FC } from 'react'

interface Option {
  label: string
  value: string
}

interface SelectProps {
  options: Option[]
  value: string
  onChange: (value: string) => void
}

export const Select: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex flex-row space-x-4 items-end">
      {options.map((option) => (
        <div
          key={option.value}
          className={`py-1 px-2 select-none rounded cursor-pointer text-zinc-400 ${
            option.value === value ? 'text-zinc-800 text-xl' : ''
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
