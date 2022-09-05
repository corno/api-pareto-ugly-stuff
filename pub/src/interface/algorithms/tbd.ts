
import * as pm from "pareto-core-state"
import * as pt from "pareto-core-types"

export type FArrayLength = <T>($: pt.Array<T>) => number
export type FGetElement = <T>($: {
    readonly "array": pt.Array<T>,
    readonly "position": number
}) => T
export type FIncludes = ($: {
    readonly "array": pt.Array<string>,
    readonly "value": string
}) => boolean

export type FJSONStringify = <T>($: T) => string
export type FJSONParse = <T>($: string) => T


//export type XPush = <T>(array: T[], element: T) => void
//export type FToRawArray = <T>($: pt.Array<T>) => T[]
//export type FToRawDictionary = <T>($: pt.Dictionary<T>) => { [key: string]: T }

//string
export type FTrimEnd = ($: string) => string
export type FStringLength = ($: string) => number
export type FSubStr = ($: {
    readonly "value": string,
    readonly "begin": number,
    readonly "length": number,
}) => string
export type FStartsWith = ($: {
   readonly "contextString": string
   readonly "searchString": string
}) => boolean

export type XDoUntil = <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void
export type XLookAhead = <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void
