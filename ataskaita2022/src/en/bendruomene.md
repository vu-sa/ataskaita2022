---
outline: deep
---

<script setup lang="ts">
import { teamPhotos, biuras } from '../../data/bendruomene.EN'
import { socakad, atstovai, kom, mark, hr, integration, admin, pkp, intl, lsp, other } from '../../data/bendruomene'
import TeamAvatarLayout from '../../components/TeamAvatarLayout.vue'
</script>

# Thank you for being with us!

<div class="grid grid-cols-2 gap-8 mt-16">
    <div v-for="photo in teamPhotos" class="flex flex-col items-center gap-3">
        <a :href="photo.href">
            <img class="rounded-md shadow-sm hover:shadow-xl transition-shadow" :src="photo.link" />
        </a>
        <strong class="tracking-tight text-lg/5 text-center">{{ photo.title }}</strong>
    </div>
</div>

## Central Office

![](/img/koordinatoriu-nuotraukos/bendros/Centrinis-biuras-2.jpg)

<TeamAvatarLayout :members="biuras" />

## VU SR Board

![VU SA Taryba](/img/koordinatoriu-nuotraukos/bendros/Taryba-2.jpg)

::: tip More...
On VU SR Council and its members - [here](/en/vu-sa/taryba).
:::

## VU SR Parliament

![VU SR Parliament](/img/kitos-nuotraukos/Parlamentas.jpg)

::: tip More...
On VU SR Parliament and its members – skaityk [here](/en/vu-sa/parlamentas).
:::

## Institutional Strengthening Fund

![ISF](/img/kitos-nuotraukos/ISF.jpg)

::: tip More
About Institutional Strengthening Fund and its members – [here](/stipri-organizacija/isf).
:::

## Coordinators of Socioacademic Affairs

![](/img/koordinatoriu-nuotraukos/bendros/Socialinio-akademinio-proceso-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="socakad" />

## Representatives\' Coordinators

![](/img/koordinatoriu-nuotraukos/bendros/atstovu.jpg)

<TeamAvatarLayout :members="atstovai" />

## Coordinators of Communication

![](/img/koordinatoriu-nuotraukos/bendros/Komunikacijos-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="kom" />

## Coordinators of Marketing

![](/img/koordinatoriu-nuotraukos/bendros/Marketingo-srities-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="mark" />

## Coordinators of Organizational Affairs

![](/img/koordinatoriu-nuotraukos/bendros/organizacines.jpg)

<TeamAvatarLayout :members="org" />

## Coordinators of Human Resources

![](/img/koordinatoriu-nuotraukos/bendros/HR-2.jpg)

<TeamAvatarLayout :members="hr" />

## Coordinators of Integration Process

![](/img/koordinatoriu-nuotraukos/bendros/Integracijos-proceso-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="integration" />

## Administrators

![](/img/koordinatoriu-nuotraukos/bendros/Administratoriai-2.jpg)

<TeamAvatarLayout :members="admin" />

## Coordinators of LSIC

![](/img/koordinatoriu-nuotraukos/bendros/LSP-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="lsp" />

## Programs, Clubs and Projects

![](/img/koordinatoriu-nuotraukos/bendros/PKP-2.jpg)

::: tip Daugiau...
Apie programų, klubų ir projektų veiklą – skaityk [čia](/darni-bendruomene/pkp).
:::

<TeamAvatarLayout :members="pkp" />

## Coordinators of Foreign Student Affairs

![](/img/koordinatoriu-nuotraukos/bendros/Uzsienieciu-koordai-2.jpg)

<TeamAvatarLayout :members="intl" />

## Coordinators of other activities

<TeamAvatarLayout :members="other" />
