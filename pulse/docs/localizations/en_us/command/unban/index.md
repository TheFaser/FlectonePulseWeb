# Комманда /unban
Путь `localizations > en_us.yml > command.unban`

## Пояснение
Сообщения для комманды `/unban`
![command unban](/commandunban.png)

## Редактирование
```yaml
<en_us.command.unban>
```

### По умолчанию
```yaml
unban:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  not-banned: "<color:#ff7171><b>⁉</b> This player is not banned"
  format: "<color:#98FB98>🔓 <fcolor:2><moderator></fcolor> unbanned the player <fcolor:2><player></fcolor>"
```

## Параметры

- [Комманда](/docs/command/unban/)
- [Права](/docs/permission/command/unban/)

### `null-player`

Сообщение, если введённый игрок не найден

### `not-banned`

Сообщение, если введённый игрок не заблокирован

### `format`

Сообщение при разблокировке
