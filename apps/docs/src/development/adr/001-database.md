# Database

**Date:** `24.07.2025`

**Status:** [`superseded by 4. Alternative architecture`](/development/adr/004-alternative-architecture)

## Context

Storage is obviously needed for the app. Previously I often opted into using `SQLite` for its ease of setup, testing and getting rid of necessity of stuff like `Docker` for local development.

On the other hand the needs for this app wil be a bit bigger. I'll need more advanced setup anyway and I won't skip docker for local development. Also `SQLite` makes some things for serious application harder. Moreover, stuff like `JSON` support, advanced querying (specifically time based) could be beneficial. Otherwise I'd need to implement a lot of stuff in user-land. I don't think I'll hit a scale where this makes a big difference - I want to take it as a learning experience though. `TimescaleDB` fits a lot of boxes here - support for time-based queries, optimizations for timeseries data etc.

## Decision

Use `Postgres` with `TimescaleDB` as a database. Leverage all the goodies from `TimescaleDB` where possible - even if they aren't needed when we talk about scale/optimizations - this way I'll learn as much as possible.

## Consequences

I'll need to learn a lot 😄 But that's also a pro. The initial setup and production setup will be more complicated than `SQLite` usage. `TimescaleDB` feels to be tailored for this kind of app (at scale).
