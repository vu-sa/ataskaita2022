---
outline: deep
---

<script setup lang="ts">
import { NImageGroup, NImage, NSpace } from "naive-ui";
import logos from "/data/friendLogos.ts";

</script>

# Padėka

## Draugai

 <NImageGroup>
    <NSpace class="my-8" align="center">
      <NImage class="p-4" v-for="image in logos" :key="image" :src="image" width="150" />
    </NSpace>
</NImageGroup>

## 2021–2022 m. ataskaitos puslapio projektą parengė

**VU SA 2021–2022 m. ataskaitos projektą koordinavo:** Julija Jarutytė

**Leidinį ruošė:** Justinas Kavoliūnas

**Tekstą redagavo:** Aušrinė Tverskytė, Simonas Granskas, Julija Lekavičiūtė

**Tekstą vertė:** Justė Vardauskaitė

_Ataskaitoje naudotos VU Fotoklubo vadovų Andranik Karagezian ir Gabijos Raubaitės nuotraukos._
