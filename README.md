# azf-shared-json-to-topic

Timed trigger for retrieveing json data and push to servicebus topic.

## Azure

You'll need a valid subscription and to setup the following resources

- resource group
- app service plan
- storage account
- servicebus namespace
- servicebus topic
- source for json data

### Setup function

The easiest way to make this function run is to setup an app service, configure the app and get the function from GitHub.

- add function app
  - Runtime stack -> Node

Configuration for app (Application settings)
```
SOURCE_URL=url-to-json-data
SERVICEBUS_CONNECTION=sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring
SERVICEBUS_TOPIC_NAME=name-for-topic-to-subscribe-to
```

- add function
  - Plattform features -> deployment center
  - github
  - branch master

## Setup development

`local.settings.json`

```JavaScript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-accesskeys-key1-connectionstring>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "SOURCE_URL": "<url-to-json-data>",
    "SERVICEBUS_CONNECTION": "<sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring>",
    "SERVICEBUS_TOPIC_NAME": "<name-for-topic-to-subscribe-to>"
  }
}
```

# License

[MIT](LICENSE)