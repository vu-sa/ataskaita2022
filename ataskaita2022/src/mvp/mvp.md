---
outline: deep
---

<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import { useMutationObserver } from '@vueuse/core'
import { ref } from 'vue'
import TimelineItemSection from '../../components/TimelineItemSection.vue'
import vusaGoals from '../../data/vusaGoals.ts'

// check if there's html class dark
const dark = ref(document.documentElement.classList.contains('dark'))

// watch for changes in html class
useMutationObserver(document.documentElement, () => {
  dark.value = document.documentElement.classList.contains('dark')
}, { attributes: true, attributeFilter: ['class']})
</script>

# VU SA 2021–2022 metų veiklos strateginių gairių įgyvendinimas

Per 2021-2022 metus VU SA įgyvendino daugiau negu 20 tikslų.

## VU SA strateginiai tikslai

Šiemet VU SA strateginiai tikslai buvo tokie:

### 1. Vilniaus universiteto bendruomenės nariai palaiko 60 kreditų atlaisvinimo idėją.

**Terminas:** 2022 m. liepos 1 d.

**Matavimo rodiklis:** 75 % I pakopos ir vientisųjų studijų programų
komitetų pirmininkų kiekviename VU KAP (kamieniniame akademiniame
padalinyje) palaiko 60 kreditų atlaisvinimo idėją.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection :items="vusaGoals['1']"></TimelineItemSection>
</NConfigProvider>

::: tip Kas įgyvendinta?

- Suburta darbo grupė VU studijų programų ir užsienio patirčių dėl
  studijų lankstumo ir akademinės paramos studentams suteikimo
  analizei atlikti.
- Deleguota studentų atstovė į VU vidinio mobilumo darbo grupę,
  kurioje derintos 60 kreditų atlaisvinimo modelio nuostatos.
- Siekiant užtikrinti akademinę pagalbą studentams organizuotas
  susitikimas su VU SPKS (Studentų paslaugų ir karjeros skyriumi) šio
  klausimo suderinimui.
- Norėdami supažindinti bendruomenę su lankstesnėmis studijų
  galimybėmis sukūrėme tinklalaidę šia tema.
- Šiuo metu supažindiname studentų atstovus SPK (studijų programų
  komitetuose) su 60 kreditų atlaisvinimo modeliu, bendradarbiaudami
  su SPKS, KRS (Komunikacijos ir rinkodaros skyriumi) kuriame vaizdo
  įrašą apie studijų lankstumą.
  :::

---

### 2. Vilniaus universiteto bendruomenė žino apie individualių poreikių turinčių asmenų patirtis ir poreikius bei geba juos atliepti

**Terminas:** 2022 m. liepos 1 d.

**Matavimo rodiklis:** bent 300 studentų, dalyvavusių VU SA
įgyvendintose iniciatyvose ir įgijusių naujų žinių apie individualių
poreikių turinčių asmenų patirtis bei poreikius.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection :items="vusaGoals['2']"></TimelineItemSection>
</NConfigProvider>

::: tip Kas įgyvendinta?

- Universiteto bendruomenei suteiktos žinios studentų su negalia
  istorijomis bei profesionalų įžvalgomis dalinantis socialinėse
  medijose, gyvuose renginiuose.
- Parengtas komunikacijos gidas.
- Bendradarbiaujant su BVS (Bendruomenės vystymo skyriumi) bei VšĮ
  „Vilties žiedas", siekiama plėsti pagalbos teikimo galimybes
  studentams su individualiais poreikiais.
- Suorganizuota paroda, filmo peržiūra bei šiuo metu organizuojama
  socialinė iniciatyva, skirtos atkreipti dėmesį į matomus ir
  nematomus sunkumus bei bendravimo ydas, su kuriomis susiduria
  negalią turintys bendruomenės nariai.
  :::
