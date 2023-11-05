import type {} from '@koishijs/plugin-console'
import { Context, Schema } from 'koishi'
import { resolve } from 'node:path'

export const name = 'a'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export const inject = ['console']

export function apply(ctx: Context) {
  ctx.console.addEntry({
    dev: resolve(__dirname, '../client/index.ts'),
    prod: resolve(__dirname, '../client/dist'),
  })
}
