import { Context, Schema, useConfig } from '@koishijs/client'

export default (ctx: Context) => {
  ctx.settings({
    id: 'desktop-enhance',
    title: 'Koishi 桌面设置',
    order: 10000,
    schema: Schema.object({
      desktop: Schema.object({
        enhance: Schema.union(
          [
            Schema.const('off').description('增强关闭'),
            Schema.const('enhance')
              .description('增强'),

            Schema.const('enhanceColor')
              .description('增强色彩'),
          ].filter(Boolean),
        )
          .default('off')
          .description('Koishi 桌面增强模式。'),
      }).description('Koishi 桌面设置'),
    }),
  })

  ctx.on('ready', () => {
    const config = useConfig()

    if (config.value.desktop.enhance !== 'off')
      console.log('111')
    else console.log('222')
  })
}
