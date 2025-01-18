# Комманда /banlist
Путь `localizations > ru_ru.yml > command.banlist`

## Пояснение
Сообщения для комманды `/banlist`
![command banlist](/commandbanlist.png)

## Редактирование
```yaml
<ru_ru.command.banlist>
```

### По умолчанию
```yaml
banlist:
  empty: "<color:#98FB98>☺ Блокировки не найдены"
  null-page: "<color:#ff7171><b>⁉</b> Страница не найдена"
  null-player: "<color:#ff7171><b>⁉</b> Игрок не найден"
  global:
    header: "<fcolor:2>▋ Блокировки: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Разблокировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
  player:
    header: "<fcolor:2>▋ Все блокировки: <count> <br>"
    line: "<hover:show_text:\"<fcolor:1>Разблокировать <display_name>\"><click:run_command:\"<command>\"><color:#ff7171>☒ <display_name></click></hover> <fcolor:1><hover:show_text:\"<fcolor:1>Айди: <id><br>Дата: <date><br>Время: <time><br>Модератор: <moderator><br>Причина: <reason>\">[ПОДРОБНЕЕ]</hover>"
    footer: "<br>▋ <fcolor:2><click:run_command:\"<command> <prev_page>\">←</click> <fcolor:1>Page: <current_page>/<last_page> <fcolor:2><click:run_command:\"<command> <next_page>\">→"
```

## Параметры

- [Комманда](/docs/command/banlist/)
- [Права](/docs/permission/command/banlist/)

### `empty`

Сообщение, если список заблокированных игроков пуст

### `null-page`

Сообщение, если введённая страница не существует

### `null-player`

Сообщение, если введённый игрок не найден

### `permanent-name`

Сообщение для обозначения времени, если игрок заблокирован навсегда

### `global`

::: details Сообщения для глобальных блокировок

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого бана из списка

#### `footer`

Нижняя часть сообщения списка
:::

### `player`

::: details Сообщения для блокировок игрока

#### `header`

Верхняя часть сообщения списка

#### `line`

Формат каждого бана из списка

#### `footer`

Нижняя часть сообщения списка
:::

