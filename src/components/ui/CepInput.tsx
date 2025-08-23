"use client"

import { Controller, Control, FieldErrors } from "react-hook-form"

type CepInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors?: FieldErrors
  placeholder?: string
}

const formatCep = (value: string) => {
  const numbersOnly = value.replace(/\D/g, "").slice(0, 8) // Máximo 8 dígitos
  const match = numbersOnly.match(/^(\d{0,5})(\d{0,3})$/)

  if (!match) return value

  let result = ""
  if (match[1]) result += match[1]
  if (match[2]) result += `-${match[2]}`

  return result
}

const CepInput = ({ name, control, errors, placeholder }: CepInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <input
            ref={ref}
            type="text"
            value={value}
            onChange={(e) => onChange(formatCep(e.target.value))}
            placeholder={placeholder || "CEP: 00000-000"}
            className={`outline-0 border px-3 py-2 rounded-md w-full ${
              errors?.[name] ? "border-red-500" : "border-primary"
            }`}
          />
        )}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  )
}

export default CepInput
