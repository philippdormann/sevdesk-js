# @philippdormann/sevdesk

unofficial js/ts client for sevdesk

### Installation
The package is currently automatically published to JSR.

```bash
bunx jsr add @philippdormann/sevdesk
```

```bash
pnpm i jsr:@philippdormann/sevdesk
```

```bash
npx jsr add @philippdormann/sevdesk
```

### Usage

```ts
import {
  bookkeepingSystemVersion,
  getCheckAccounts,
  getNextCustomerNumber,
} from "@philippdormann/sevdesk";

// get info about bookkeeping system version
bookkeepingSystemVersion({ auth: process.env.SEVDESK_API_KEY }).then(
  (version) => {
    console.log("Bookkeeping System Version:", version.data);
  },
);

// load sevdesk accounts
getCheckAccounts({ auth: process.env.SEVDESK_API_KEY }).then((accounts) => {
  console.log("Sevdesk Accounts:", accounts.data);
});

getNextCustomerNumber({ auth: process.env.SEVDESK_API_KEY }).then(
  (nextNumber) => {
    console.log("Next Customer Number:", nextNumber.data);
  },
);
```

### Docs
see https://jsr.io/@philippdormann/sevdesk/doc for all available methods and types

### License
MIT