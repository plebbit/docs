---
slug: /learn/intro
---

# Welcome to Plebbit

## Overview

**Plebbit is a protocol to create serverless, adminless, fully decentralized social media.**

- *Serverless*: Plebbit is built completely with IPFS/IPNS/pubsub. It doesn't use any central server, central database, public HTTP endpoint or DNS, it is **pure peer to peer**. This means that social apps built on Plebbit+ cannot "go down" as a whole.
- *Adminless*: Plebbit has **no global admins** or global moderators; it is truly peer-to-peer, nobody can stop you from connecting to another user directly, if the user is online. Every user has full property rights over their own content, which they can [monetize how they want](../learn/local-node/monetizing-your-sub), and [moderate how they want](../learn/local-node/challenges).
- *Fully decentralized*: unlike "federated" or blockchain-based social media, **running a Plebbit full node is extremely easy**, as easy as opening a desktop app and keeping it running, and it works with only ~4GB of RAM, a few GBs of storage and a regular internet connection (few GBs pf bandwidth per month). 

Similarly to how BitTorrent works, Plebbit nodes automatically seed content to other nodes, so **the more nodes there are, the faster the network gets.** Running a full node takes a few seconds, since there is no blockchain to sync. 

### Plebbit clients

**Plebbit clients are different social media applications that use the same plebbit protocol data.** This means that you can use the same account on different user interfaces, and your posts, comments, likes, etc. will be the same.

Existing Plebbit clients are:
- **[Seedit](../learn/frontends/seedit)**, a decentralized reddit alternative
- **[Plebchan](../learn/frontends/plebchan)**, a decentralized 4chan alternative
- **[Plebones](../learn/frontends/plebones)**, a barebones interface, mainly for testing

Plebbit is a permissionless protocol, so **anyone can create their own Plebbit client**, and we encourage you to do so. All code is open source, and you can find the code for the existing clients [on GitHub](https://github.com/plebbit/).

## Why Plebbit?

Centralized social media platforms are a problem, because they are controlled by a few companies that can censor content, ban users, and even take down entire platforms. Social consensus is being replaced by corporate consensus.

Plebbit is a revolutionary protocol, because we believe **it is currently the only working design in existence for truly decentralized social media that can scale to millions of users**.

### Truly decentralized communities

Plebbit's design is based on communities, which can take the shape of a forum, a subreddit, a 4chan board, a facebook page, etc. Users connect peer to peer to one or more communities, from which they read or write content. **Plebbit can fully decentralize community-based social media of all kinds**, including reddit, 4chan, old-school forums, but also crowdfunding platforms, blogging platforms, facebook groups and pages, meetups, etc.

**[You can read the whitepaper here](https://github.com/plebbit/whitepaper/discussions/2).**

### Plebbit's core innovation: spam resistance

What truly distinguishes Plebbit from any other "decentralized" social media solution is its solution to spam: **fully arbitrary anti-spam challenges**, exchanged p2p, customizable by each node to anything that can be code.

When you publish to a plebbit community (a post, vote, comment or edit) you receive an anti-spam challenge from the community's node, fully peer to peer, and the challenge is arbitrary to the community, meaning it can be anything that can be code. It could be a password, an SMS, a PoW challenge, a puzzle, a biometric login, it could require karma or a token, a payment... etc; it could be anything. 

This means that **Plebbit clients are as reslient from spam as any centralized or decentralized site could ever be. Whichever anti-spam solution will win against AI spam for example, plebbit nodes will be able to use it. It's up to them.**

Read more about Plebbit's arbitrary anti-spam challenges [here](../learn/local-node/challenges).

### Plebbit's future potential

Unlike Plebbit, in user-based social media like Twitter, Instagram, TikTok, etc the user reads and writes content to another user's profile, and all profiles are stored in a central database that cannot be fully decentralized. However, it's entirely possible for Plebbit to provide a more decentralized alternative to user-based social media, by treating each user as if it were a community, via public RPC nodes for every user, assigned non-custodially. This is on the [roadmap](../learn/roadmap).

Because of this, we believe that **Plebbit can effectively replace virtually *all* centralized social media platforms**.