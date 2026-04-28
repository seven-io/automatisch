<p align="center">
  <img src="https://www.seven.io/wp-content/uploads/Logo.svg" width="250" alt="seven logo" />
</p>

<h1 align="center">seven for Automatisch</h1>

<p align="center">
  Official seven app for <a href="https://automatisch.io/">Automatisch</a> - the open-source Zapier alternative.
  Send SMS, place voice calls and receive inbound SMS from your Automatisch flows.
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT License" /></a>
  <img src="https://img.shields.io/badge/Automatisch-self--hosted-blue" alt="Automatisch self-hosted" />
  <img src="https://img.shields.io/badge/TypeScript-app-3178c6" alt="TypeScript app" />
</p>

---

## Features

- **Send SMS Action** - `sendSMS` step for any flow trigger
- **Send Voice Action** - `sendVoice` step for text-to-speech calls
- **Receive SMS Trigger** - `receiveSMS` webhook to start flows from incoming messages

## Prerequisites

- A self-hosted [Automatisch](https://automatisch.io/) instance
- A [seven account](https://www.seven.io/) with API key ([How to get your API key](https://help.seven.io/en/developer/where-do-i-find-my-api-key))

## Installation

```bash
cd packages/backend/src/apps
git clone https://github.com/seven-io/automatisch seven
```

Restart Automatisch so the `seven` app is picked up by the backend.

## Configuration

In Automatisch:

1. Open **My Apps** and pick **seven**.
2. Click **Add connection**, paste your seven API key and save.
3. The connection becomes selectable in any new step using the `sendSMS`, `sendVoice` or `receiveSMS` operations.

## Usage

### Actions

| Action | Description |
|--------|-------------|
| `sendSMS` | Send an SMS to one or more recipients |
| `sendVoice` | Place a text-to-speech voice call |

### Triggers

| Trigger | Description |
|---------|-------------|
| `receiveSMS` | Fires when seven forwards an inbound SMS to the configured webhook |

For inbound SMS, configure the webhook URL Automatisch generates in your seven [dashboard](https://app.seven.io/) under *Developer > Webhooks*.

## Support

Need help? Feel free to [contact us](https://www.seven.io/en/company/contact/) or [open an issue](https://github.com/seven-io/automatisch/issues).

## License

[MIT](LICENSE)
