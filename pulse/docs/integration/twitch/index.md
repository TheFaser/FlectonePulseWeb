# Твич
Путь `integration.yml >twitch`

## Пояснение
Интеграция с Twitch позволяет:
- отправлять сообщения из Minecraft в Twitch
- отправлять сообщения из Twitch в Minecraft
- подписываться на начало трансляции Twitch

![twitch message](/twitchmessage.png)
![minecraft message](/twitchminecraftmessage.png)

## Редактирование
```yaml
<integration.twitch>
```

### По умолчанию
```yaml
twitch:
  enable: false
  client-id: ""
  token: ""
  message-channel:
    CHAT: []
    FROM_TWITCH_TO_MINECRAFT: []
  follow-channel:
    faseri4ka:
      - "stream start https://twitch.tv/faseri4ka"
  destination:
    type: CHAT
```

## Параметры

- [Локализация](/docs/localizations/ru_ru/integration/twitch/)
- [Права](/docs/permission/integration/twitch/)

<!--@include: @/parts/enable.md-->

::: warning ПРЕДУПРЕЖДЕНИЕ
- Перед включением, вставь **токен** и **ID клиента** Twitch
- После включения, **ЖЕЛАТЕЛЬНО** перезагрузить сервер, иначе плагин может вызвать зависание
:::

### `client-id`

[Идентификатор](https://twitchtokengenerator.com/) пользователя. Можно использовать environment variables, например `${VALUE}`
![client id](/twitchclientid.png)

### `token`

[Токен](https://twitchtokengenerator.com/) пользователя для подключения. Можно использовать environment variables, например `${VALUE}`
![token](/twitchtoken.png)

### `message-channel`

Список типов сообщений и названий каналов на Twitch

::: tip Например я хочу, чтобы из Minecraft отправлялось сообщение комманды `/ban` в Twitch
1. Копирую названия каналов Twitch, в которые нужно отправить сообщение (`faseri4ka`)
2. Прописываю:
```yaml
message-channel:
  COMMAND_BAN:
    - "faseri4ka" // [!code highlight]
```

Каналов может быть сколько угодно, главное, чтобы к ним был доступ у клиента из [секреты](/docs/secrets/twitch/)
:::

<!--@include: @/parts/messageTag.md-->

### `follow-channel`

Список, где ключом является имя канала, а значением список комманд, которые выполняться при старте трансляции

::: tip Например я хочу отслеживать начало стрима у `faseri4ka` и писать `stream start https://twitch.tv/faseri4ka`
1. Копирую названия канала `faseri4ka`
2. Прописываю:
```yaml
follow-channel:
  faseri4ka:
    - "stream start https://twitch.tv/faseri4ka"
```

- Каналов может быть до 10 одновременно, главное, чтобы к ним был доступ у клиента из [секреты](/docs/secrets/twitch/)
- Комманд, при начале трансляции, может быть сколько угодно и какие угодно
:::

<!--@include: @/parts/destination.md-->

