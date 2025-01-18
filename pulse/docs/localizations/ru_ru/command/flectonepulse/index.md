# Комманда /flectonepulse
Путь `localizations > ru_ru.yml > command.flectonepulse`

## Пояснение
Сообщения для комманды `/flectonepulse`
![command flectonepulse](/commandflectonepulse.png)

## Редактирование
```yaml
<ru_ru.command.flectonepulse>
```

### По умолчанию
```yaml
flectonepulse:
  format-false: "<color:#ff7171>★ Возникла проблема при перезагрузке"
  format-true: "<fcolor:2>★ <u>FlectonePulse</u> успешно перезагружен! (<i><time></i>)"
  format-true-text: "<fcolor:2>★ ВАЖНО! Перезагружен только текст, для ПОЛНОЙ перезагрузки нужно использовать: <br><fcolor:1>/flectonepulse reload"
```

## Параметры

- [Комманда](/docs/command/flectonepulse/)
- [Права](/docs/permission/command/flectonepulse/)

### `format-false`

Сообщение при возникновении ошибки

### `format-true`

Формат сообщения, которое будет отправлено при перезагрузке всего `FlectonePulse`

### `format-true-text`

Форма сообщения, которое будет отправлено при перезагрузке текста

