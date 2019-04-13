# pg-date

Convert string representation of PostgreSQL `timestamp without timezone` output into a Date object.

## Motivation

Some folks (including me) prefer storing all PostgreSQL date/time values as `timestamp without timezone` data type assuming timestamps are in UTC.

Some javascript libraries, e.g. [pg-promise](https://www.npmjs.com/package/pg-promise), when they see returning type of `timestamp without timezone`, do a simple `new Date(val)` which creates a `Date` object in the local time. This is not what expected.

Workaround:

1. Make your DB functions convert returned `timestamp without timezone` values to `text`. E.g. `table.created_at::text AS created_at`. String representation will be like `2016-08-26 04:32:04.273131`.

2. Use `pg-date` helper to create a native javascript `Date` object in correct timezone. If the value that comes from database is `null`, the `pg-date` helper will also return `null`.


## Example

```js
const fromDbString = require('pg-date');

const dataSet = await queryDatabaseSomehow();

return dataSet.map(row => ({
  // ...
  createdAt = fromDbString(row['create_at']),
  // ...
}));
```
