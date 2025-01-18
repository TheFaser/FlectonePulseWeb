# Комманда /ban
Путь `localizations > en_us.yml > command.ban`

## Пояснение
Сообщения для комманды `/ban`
![command ban](/commandban.png)

## Редактирование
```yaml
<en_us.command.ban>
```

### По умолчанию
```yaml
ban:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  null-time: "<color:#ff7171><b>⁉</b> Incorrect time"
  reasons:
    default: "You have been banned from this server"
  server: "<color:#ff7171>🔒 <fcolor:2><moderator></fcolor> was banned player <fcolor:2><player></fcolor> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Remaining time: <time_left><br>Moderator: <moderator><br>Reason: <reason>\">[INFO]</hover>"
  person: "<color:#ff7171>🔒 BAN 🔒<fcolor:1><br><br>Date: <date><br><br>Time: <time><br><br>Remaining time: <time_left><br><br>Moderator: <moderator><br><br>Reason: <reason>"
  connection-attempt: "<color:#ff7171>🔒 Banned <fcolor:2><player></fcolor> tried to log in <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Remaining time: <time_left><br>Moderator: <moderator><br>Reason: <reason>\">[INFO]</hover>"
```

## Параметры

- [Комманда](/docs/command/ban/)
- [Права](/docs/permission/command/ban/)

### `null-player`

Сообщение, если введённый игрок не найден

### `null-time`

Сообщение, если введено невозможное время

#### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/ban player 1d random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`
:::

#### `server`

Сообщение для всех

#### `person`

Сообщение для игрока

#### `connection-attempt`

Сообщение, если заблокированный игрок пытался подключиться

