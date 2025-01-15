### `destination`

Where the message will be sent

| Тип          | Пояснение                                |
|--------------|------------------------------------------|
| `ACTION_BAR` | message above the player's inventory     |
| `BOSS_BAR`   | Message at the top of the screen         |
| `BRAND`      | Message in F3                            |
| `CHAT`       | Massage in chat                          |
| `TITLE`      | Full screen message                      |
| `SUBTITLE`   | Full screen massage (bottom line) |
| `TAB_HEADER` | Massege in TAB (Top)                 |
| `TAB_FOOTER` | Massege in TAB (Bottom)                  |

::: tip HOW TO CHANGE DESTINATION?
 Replase `type: ... ` and restart `FlectonePulse` by mean of command `/flectonepulse reload`, additional settings will appear AFTER a restart
:::

No further customization required
```yaml
- ACTION_BAR
- BRAND
- CHAT
- TAB_HEADER
- TAB_FOOTER
```

::: details setting `BOSS_BAR`

```yaml
destination:
  type: BOSS_BAR
  duration: 100
  health: 1.0
  overlay: PROGRESS
  color: BLUE
  play-boos-music: false
  create-world-fog: false
  darken-screen: false
```

#### `duration`

Duration of message display

#### `health`

How full the boss bar scale will be

#### `overlay`

| Type         | Explanation              |
|--------------|--------------------------|
| `PROGRESS`   | Одной линией             |
| `NOTCHED_6`  | Разделённое на 6 частей  |
| `NOTCHED_10` | Разделённое на 10 частей |
| `NOTCHED_12` | Разделённое на 12 частей |
| `NOTCHED_20` | Разделённое на 20 частей |

#### `color`

Color display

| type     |
|----------|
| `PINK`   |
| `BLUE`   |
| `RED`    |
| `GREEN`  |
| `YELLOW` |
| `PURPLE` |
| `WHITE`  |

#### `play-boos-music`

Will there be music when the message

#### `create-world-fog`

Will there be a fog on the message

#### `darken-screen`

Whether the screen is dimmed when a message is displayed
:::

::: details Setting `TITLE` (or `SUBTITLE`)
```yaml
destination:
  type: TITLE (or SUBTITLE)
  times:
    fade-in: 20
    stay: 100
    fade-out: 20
```

#### `times`

| Поле       | Пояснение                            |
|------------|--------------------------------------|
| `fade-in`  | Time in ticks for message appearance |
| `stay`     | Time in ticks to hold a message      |
| `fade-out` | Time in ticks to delete a message    |
:::
