"use client"

import { Controller, Control, FieldErrors } from "react-hook-form"

type PhoneInputProps = {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  errors?: FieldErrors
  placeholder?: string
}

const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "").slice(0, 11) // <- Limita a 11 dígitos

  const match = numbers.match(/^(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})$/)
  if (!match) return value

  let result = ""
  if (match[1]) result += `(${match[1]}`
  if (match[1].length === 2) result += ") "
  if (match[2]) result += match[2] + " "
  if (match[3]) result += match[3]
  if (match[4]) result += `-${match[4]}`

  return result.trim()
}

const PhoneInput = ({ name, control, errors, placeholder }: PhoneInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value, ref } }) => (
          <input
            ref={ref}
            type="tel"
            value={value}
            onChange={(e) => onChange(formatPhone(e.target.value))}
            placeholder={placeholder || "Telefone: (81) 9 9999-9999"}
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

export default PhoneInput
