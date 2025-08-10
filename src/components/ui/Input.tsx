import React from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type, error, ...rest }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`outline-0 bg-none border px-3 py-2 rounded-md w-full ${
          error ? "border-red-500" : "border-primary"
        }`}
        {...rest}
      />
    )
  }
)

Input.displayName = "Input"

