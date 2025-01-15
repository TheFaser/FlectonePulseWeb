### `sound`
Sound playback

| Field      | Type      | Explanation                                                                                                      |
|------------|-----------|------------------------------------------------------------------------------------------------------------------|
| `enable`   | `boolean` | Turns on sound operation                                                                                         |
| `volume`   | `float`   | Sound volume from `0` to `1.0`                                                                                   |
| `pitch`    | `float`   | Sound tonality from `0` to `1.0`                                                                                 |
| `category` | `String`  | Category from `MASTER`, `MUSIC`, `RECORD`, `WEATHER`, `BLOCK`, `HOSTILE`, `NEUTRAL`, `PLAYER`, `AMBIENT`, `VOICE`|
| `name`     | `String`  | The name of the sound, e.g. `minecraft:entity.llama.spit`                                                        |


::: tip HOW TO USE SOUND?
Replace `false` with `true` and restart `FlectonePulse` with the `/flectonepulse reload` command, the additional parameters for sound customisation will appear AFTER the restart
:::

Sound setting looks like this
```yaml
sound:
  enable: true
  volume: 1.0
  pitch: 1.0
  category: "HOSTILE"
  name: "minecraft:entity.llama.spit"
```
