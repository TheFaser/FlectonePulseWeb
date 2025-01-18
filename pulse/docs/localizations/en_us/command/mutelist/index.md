# Комманда /mutelist
Путь `localizations > en_us.yml > command.mutelist`

## Пояснение
Сообщения для комманды `/mutelist`
![command mutelist](/commandmutelist.png)

## Редактирование
```yaml
<en_us.command.mutelist>
```

### По умолчанию
```yaml
mutelist:
  empty: "<color:#98FB98>☺ No mutes found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  global:
    header: "<fcolor:2>▋ Mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ All mutes: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unmute <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[MORE]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/docs/command/mutelist/)
- [Права](/docs/permission/command/mutelist/)

### `empty`

Сообщение, если список игроков с мутами пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных мутов

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для мутов игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого мута из списка

#### `footer`

Нижняя часть сообщения списка
:::

