# Комманда /unmute
Путь `localizations > en_us.yml > command.unmute`

## Пояснение
Сообщения для комманды `/unmute`
![command unmute](/commandunmute.png)

## Редактирование
```yaml
<en_us.command.unmute>
```

### По умолчанию
```yaml
unmute:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not-muted: "<color:#ff7171><b>⁉</b> This player is not muted"
  format: "<color:#98FB98>🔓 <fcolor:2><moderator></fcolor> unmutted the player <fcolor:2><player></fcolor>"
```

## Параметры

- [Комманда](/docs/command/unmute/)
- [Права](/docs/permission/command/unmute/)

### `null-player`

Сообщение, если введённый игрок не найден

### `not-muted`

Сообщение, если введённый игрок не замучен

### `format`

Сообщение при размуте
