import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'> {}

export function TableHeader({...rest}: TableHeaderProps) {
  return (
    <th {...rest} className="py-3 px-4 text-sm font-semibold text-left"></th>
  )
}