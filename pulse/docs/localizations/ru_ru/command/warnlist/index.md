# Комманда /warnlist
Путь `localizations > ru_ru.yml > command.warnlist`

## Пояснение
Сообщения для комманды `/warnlist`
![command warnlist](/commandwarnlist.png)

## Редактирование
```yaml
<ru_ru.command.warnlist>
```

### По умолчанию
```yaml
warnlist:
  empty: "<color:#98FB98>☺ Предупреждения не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global:
    header: "<fcolor:2>▋ Предупреждения: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ Все предупреждения: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Снять предупреждение <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Страница: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
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

### `permanent`

Сообщение для обозначения времени, если предупреждение навсегда

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

