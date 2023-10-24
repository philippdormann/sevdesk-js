# @philippdormann/sevdesk
## Installation
```bash
pnpm i @philippdormann/sevdesk
```
## Usage
```js
import { InvoiceService, sevDeskLogin } from "@philippdormann/sevdesk";
sevDeskLogin("xxxxxxxxxx");
InvoiceService.getInvoices()
  .then((i) => {
    console.log(i);
  })
  .catch((err) => {
    console.error(err);
  });
```
