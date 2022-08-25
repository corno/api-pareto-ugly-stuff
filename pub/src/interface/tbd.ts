
import * as pt from "pareto-core-types"

export type ArrayLength = <T>(array: T[]) => number
export type GetElement = <T>(array: T[], position: number) => T
export type Push = <T>(array: T[], element: T) => void
export type Includes = (array: string[], value: string) => boolean

export type JSONStringify = (data: any) => string
export type JSONParse = (str: string) => any
export type ToRawArray = <T>($: pt.Array<T>) => T[]
export type ToRawDictionary = <T>($: pt.Dictionary<T>) => { [key: string]: T }
export type TrimEnd = (value: string) => string
export type StringLength = (value: string) => number
export type SubStr = (value: string, begin: number, length: number) => string
