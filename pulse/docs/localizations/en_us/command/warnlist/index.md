# Комманда /warnlist
Путь `localizations > en_us.yml > command.warnlist`

## Пояснение
Сообщения для комманды `/warnlist`
![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<en_us.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  empty: "<color:#98FB98>☺ No warns found"
  null-page: "<color:#ff7171><b>⁉</b> This page doesn't exist"
  null-player: "<color:#ff7171><b>⁉</b> This player does not exist"
  global:
    header: "<fcolor:2>▋ Warns: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[INFO]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ All warns: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Click to unwarn <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>ID: <id><br>Date: <date><br>Time: <time><br>Moderator: <moderator><br>Reason: <reason>\">[INFO]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/docs/command/warnlist/)
- [Права](/docs/permission/command/warnlist/)

### `empty`

Сообщение, если список игроков предупреждений пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `global`

::: details Сообщения для глобальных предупреждений

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого предупреждения из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для предупреждений игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого предупреждения из списка

#### `footer`

Нижняя часть сообщения списка
:::

