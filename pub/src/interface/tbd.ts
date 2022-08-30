
import * as pt from "pareto-core-types"
import * as pm from "pareto-core-state"

export type ArrayLength = <T>(array: T[]) => number
export type GetElement = <T>(array: T[], position: number) => T
export type Push = <T>(array: T[], element: T) => void
export type Includes = (array: string[], value: string) => boolean

export type JSONStringify = (data: any) => string
export type JSONParse = (str: string) => any


export type ToRawArray = <T>($: pt.Array<T>) => T[]
export type ToRawDictionary = <T>($: pt.Dictionary<T>) => { [key: string]: T }

//string
export type TrimEnd = (value: string) => string
export type StringLength = (value: string) => number
export type SubStr = (value: string, begin: number, length: number) => string

export type Max = (a: number, b: pt.Nested<number>) => number



export type DoUntil = <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void
export type LookAhead = <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void