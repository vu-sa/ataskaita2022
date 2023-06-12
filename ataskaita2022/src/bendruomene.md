---
outline: deep
---

<script setup lang="ts">
import { teamPhotos, biuras, socakad, atstovai, kom, org, mark, hr, integration, admin, pkp, intl, lsp, other } from '../data/bendruomene'
import TeamAvatarLayout from '../components/TeamAvatarLayout.vue'
</script>

# Ačiū, kad esate kartu!

<div class="grid grid-cols-2 gap-8 mt-16">
    <div v-for="photo in teamPhotos" class="flex flex-col items-center gap-3">
        <a :href="photo.href">
            <img class="rounded-md shadow-sm hover:shadow-xl transition-shadow" :src="photo.link" />
        </a>
        <strong class="tracking-tight text-lg/5 text-center">{{ photo.title }}</strong>
    </div>
</div>

## Centrinis biuras

![](/img/koordinatoriu-nuotraukos/bendros/Centrinis-biuras-2.jpg)

<TeamAvatarLayout :members="biuras" />

## VU SA Taryba

![VU SA Taryba](/img/koordinatoriu-nuotraukos/bendros/Taryba-2.jpg)

::: tip Daugiau...
Apie VU SA Tarybos veiklą bei kas ją sudarė – skaityk [čia](/vu-sa/taryba).
:::

## VU SA Parlamentas

![VU SA Taryba](/img/kitos-nuotraukos/Parlamentas.jpg)

::: tip Daugiau
Apie VU SA Parlamento veiklą bei kas ją sudarė – skaityk [čia](/vu-sa/parlamentas).
:::

## Institucinio stiprinimo fondas

![ISF](/img/kitos-nuotraukos/ISF.jpg)

::: tip Daugiau
Apie Institucinio fondo veiklą bei kas jį sudarė – skaityk [čia](/stipri-organizacija/isf).
:::

## Socialinio-akademinio proceso koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/Socialinio-akademinio-proceso-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="socakad" />

## Atstovų koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/atstovu.jpg)

<TeamAvatarLayout :members="atstovai" />

## Komunikacijos koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/Komunikacijos-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="kom" />

## Marketingo koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/Marketingo-srities-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="mark" />

## Organizacinės srities koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/organizacines.jpg)

<TeamAvatarLayout :members="org" />

## Žmogiškųjų išteklių koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/HR-2.jpg)

<TeamAvatarLayout :members="hr" />

## Integracijos proceso koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/Integracijos-proceso-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="integration" />

## Administratoriai

![](/img/koordinatoriu-nuotraukos/bendros/Administratoriai-2.jpg)

<TeamAvatarLayout :members="admin" />

## LSP koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/LSP-koordinatoriai-2.jpg)

<TeamAvatarLayout :members="lsp" />

## Programos, klubai ir projektai

![](/img/koordinatoriu-nuotraukos/bendros/PKP-2.jpg)

::: tip Daugiau...
Apie programų, klubų ir projektų veiklą – skaityk [čia](/darni-bendruomene/pkp).
:::

<TeamAvatarLayout :members="pkp" />

## Užsieniečių studentų koordinatoriai

![](/img/koordinatoriu-nuotraukos/bendros/Uzsienieciu-koordai-2.jpg)

<TeamAvatarLayout :members="intl" />

## Kitų sričių koordinatoriai

<TeamAvatarLayout :members="other" />
