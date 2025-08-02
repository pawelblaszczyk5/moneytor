<!-- cspell:words statefullness -->

# Backend architecture

**Date:** `24.07.2025`

**Status:** `accepted`

## Context

I need more fleshed out architecture for backend parts of my application. I really enjoy building backend parts lately and I want to learn how to build more serious stuff. Moreover, integration with frontend frameworks is often an Achilles' heel of my apps.

This app will have some specific needs in terms of the backend. I'll want to implement stuff that requires some kind of jobs, workflow systems. I'm really enjoying `Effect` ecosystem for building backend parts of the app. Their recent creation of `Cluster` and `Workflow` systems is really enjoyable for me and I want to try it in more serious app. I think it fits here pretty nicely.

Moreover, the `Cluster` enables a lot of interesting patterns for multi-tenant applications, especially when it comes to highly data driven apps. Statefullness is something that's really powerful and a bit lost treasure in modern times.

On the other hand, it may sound like an overkill a bit - but one of my main ideas for this project is also learning and trying new things. I think I'd never have a way of trying it otherwise while it sounds super cool. I'm deeply interested in doing more "hardcore" backend development.

## Decision

Use `Cluster` and `Workflow` to build the backend layer. Meanwhile treat frontend as a separate app, not as a dumb frontend as some people do.

## Consequences

Both `Cluster` and `Workflow` are still very early and it can cause some bumps down the road. It'll make the line between frontend and backend much more clear than any of my apps before. However, I'm taking my own twist here with treating the frontend app as separate service. I think it's a really good architecture.

It'll also make the infrastructure/hosting harder and more expensive because at minimum I'll need 4 services.
