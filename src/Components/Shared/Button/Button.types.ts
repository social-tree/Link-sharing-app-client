import { ReactElement } from "react"

export type TButtonType = 'primary' | 'secondary' | 'tab'

export interface IButtonProps {
    type: TButtonType
    onClick: (...args: any) => void
    children: string
    icon?: ReactElement
    active?: boolean
}
