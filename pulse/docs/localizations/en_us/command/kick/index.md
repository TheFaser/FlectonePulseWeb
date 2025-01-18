# Комманда /kick
Путь `localizations > en_us.yml > command.kick`

## Пояснение
Сообщения для комманды `/kick`
![command kick](/commandkick.png)

## Редактирование
```yaml
<en_us.command.kick>
```

### По умолчанию
```yaml
kick:
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  reasons:
    default: "Kicked by an operator"
  server: "<color:#ff7171>🔒 <fcolor:2><moderator></fcolor> was kicked player <fcolor:2><player></fcolor> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Moderator: <moderator><br>Reason: <reason>\">[INFO]</hover>"
  person: "<color:#ff7171>🔒 KICK 🔒 <fcolor:1><br><br>ID: <id><br><br>Date: <date><br><br>Moderator: <moderator><br><br>Reason: <reason>"
```

## Параметры

- [Комманда](/docs/command/kick/)
- [Права](/docs/permission/command/kick/)

### `null-player`

Сообщение, если введённый игрок не найден

#### `reasons`

Список с ключами и значениями, где ключом является слово, а значением конкретная причина

::: tip Можно вписывать свои причины, например
```yaml
random_kek: "Random reason"
```
Тогда если я напишу `/kick player random_kek`, то причиной будет `Random reason`

Если причина не указана, будет использоваться `default`

:::

### `server`

Сообщение для всех

### `person`

Сообщение для игрока

