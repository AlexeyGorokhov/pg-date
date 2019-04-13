# Change Log

## [1.0.0] - 2018-02-04

Initial release.

## [2.0.0] - 2019-04-13

### Breaking Changes

* If the passed string is not a correct representation of date (e.g., `null` value), `pg-date` now returns `null` (in v1, it returns `Invalid Date` Date object).
