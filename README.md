# @philippdormann/sevdesk
## Installation
```bash
pnpm i @philippdormann/sevdesk
```
## Usage
```js
import { InvoiceService, serviceOptions } from "@philippdormann/sevdesk";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://my.sevdesk.de/api/v1",
  timeout: 5000,
  headers: { Authorization: "xxxxxxxxxxxxxx" },
});
serviceOptions.axios = instance;
//===
InvoiceService.getInvoices()
  .then((i) => {
    console.log(i);
  })
  .catch((err) => {
    console.error(err);
  });
```
