# microsoft-graph-notification-server-example

a minimal example of a notification service to receive notifications from Microsoft Graph subscriptions

## Running the server

in order to run the server, you have 2 choices:

1. locally:
    * `npm install`
    * `npm start`
2. docker:
    * `docker-compose up`

## Receiving Notifications

in order to do that, you need to subscribe the service to microsoft graph.

this can be done in one of 2 ways:

1. use [Microsoft Graph Exlporer](https://developer.microsoft.com/en-us/graph/graph-explorer)
2. perform a proper POST request to Microsoft Graph [Subscription Endpoint](https://graph.microsoft.com/v1.0/subscriptions).

you can use the following sample as your body:

```js
{
  "changeType": "created, updated, deleted",
  "notificationUrl": "<your server's https url>",
  "resource": "me/messages",
  "expirationDateTime": "2019-08-03T18:23:45.9356913Z"
}
```

pay attention the `notificationUrl` MUST be an https endpoint
