import { type RedisValue } from 'ioredis'

export type Entry = readonly [id: string, values: RedisValue[]]
export type XAutoClaim = readonly [startID: string, entries: readonly Entry[]]
export type XReadGroup = ReadonlyArray<[key: string, entries: readonly Entry[]]>
