---
outline: deep
---

<script setup lang="ts">
import { NImageGroup, NImage, NSpace } from "naive-ui";
import logos from "../../data/friendLogos.ts";

</script>

# We give our thanks

## Friends

 <NImageGroup>
    <NSpace class="my-8" align="center">
      <NImage class="p-4" v-for="image in logos" :key="image" :src="image" width="150" />
    </NSpace>
</NImageGroup>

## VU SR 2021–2022 report project team

**The publication was coordinated by:** Julija Jarutytė

**The publication was designed by:** Justinas Kavoliūnas

**The text was edited by:** Aušrinė Tverskytė, Simonas Granskas, Julija Lekavičiūtė

**The text was translated by:** Justė Vardauskaitė

_The report uses photos by Andranik Karagezian and Gabija Raubaitė._
