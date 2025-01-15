### `cooldown`

Cooldown uses

| Поле       | Тип       | Пояснение                                                                                                 |
|------------|-----------|-----------------------------------------------------------------------------------------------------------|
| `enable`   | `boolean` | Enables cooldown operation                                                                                |
| `duration` | `long`    | How many [ticks](https://ru.minecraft.wiki/w/%D0%A2%D0%B0%D0%BA%D1%82) must elapse between uses           |


::: tip HOW USE COOLDOWN?
Replace `false` to `true` and restart `FlectonePulse` by mean of command `/flectonepulse reload`. Additional parameters for delay settings will appear AFTER RESET
:::

Cooldown setting looks like this
```yaml
cooldown:
  enable: true
  duration: 60
```
