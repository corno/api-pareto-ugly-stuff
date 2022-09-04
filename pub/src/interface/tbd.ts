
import * as pt from "pareto-core-types"
import * as pm from "pareto-core-state"

export type FArrayLength = <T>(array: T[]) => number
export type FGetElement = <T>(array: T[], position: number) => T
export type XPush = <T>(array: T[], element: T) => void
export type FIncludes = (array: string[], value: string) => boolean

export type FJSONStringify = <T>(data: T) => string
export type FJSONParse = <T>(str: string) => T


export type FToRawArray = <T>($: pt.Array<T>) => T[]
export type FToRawDictionary = <T>($: pt.Dictionary<T>) => { [key: string]: T }

//string
export type FTrimEnd = (value: string) => string
export type FStringLength = (value: string) => number
export type FSubStr = (value: string, begin: number, length: number) => string

export type FMax = (a: number, b: pt.Nested<number>) => number

export type XDoUntil = <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void
export type XLookAhead = <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void
