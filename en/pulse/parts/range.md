### `range`

How far into the blocks will the message be displayed

| Значение           | Объяснение                                                                                                |
|--------------------|-----------------------------------------------------------------------------------------------------------|
| `-2`               | Message will be sent to all players on the server and to the [Proxy](/docs/config/plugin/#proxy)                 |
| `-1`               | Message will be sent to all players on the server                                                        |
| `0`                | Message will only be sent to the sender                                                             |
| any number ` > 0` | The message will be sent to players who have a distance between them and the sender **lower**  this number |

::: tip NOTE
If a range greater than `0` is specified, such as `100`, then the recipients must also be in the same dimension as the sender
:::
