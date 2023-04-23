---
outline: deep
---

<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import { useMutationObserver } from '@vueuse/core'
import { ref } from 'vue'
import TimelineItemSection from '../../../components/TimelineItemSection.vue'
import vusaGoals from '../../../data/vusaGoals.EN.ts'

// check if there's html class dark
const dark = ref(document.documentElement.classList.contains('dark'))

// watch for changes in html class
useMutationObserver(document.documentElement, () => {
  dark.value = document.documentElement.classList.contains('dark')
}, { attributes: true, attributeFilter: ['class']})
</script>

# Implementation of VU SR strategic guidelines for 2021-2022

During 2021-2022 VU SR implemented more than 20 goals.

## VU SA strategic goals

This year VU SA strategic goals were:

### 1. Members of the Vilnius University community support the idea of freeing up 60 credits

**Deadline:** 1st of July 2022

**Measurement rate:** 75% of the chairmen of the 1st cycle and
integrated study program committee chairpersons at each VU ACU supports
the idea of freeing up 60 credits.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection :items="vusaGoals['1']" english></TimelineItemSection>
</NConfigProvider>

::: tip What has been done

- A working group has been set up to carry out analysis of VU study
  programs and foreign experiences on the flexibility of studies and
  the provision of academic support to students.
- A representative of
  students was delegated to the VU Internal Mobility Working Group,
  which coordinated the provisions of the 60 credit release model.
- In
  order to ensure academic assistance to students, a meeting with VU
  Student Affairs and Career Office (SACO) was organized to coordinate
  this issue.
- To introduce the community to more flexible study
  opportunities, we have created a podcast on this topic.
- Currently,
  we introduce student representatives to the Study Program Commitee
  (SPC) with the 60-credit release model, in cooperation with the
  SACO, we are creating a video about the flexibility of studies in VU
  Communication and Marketing Department.
  :::

---

### 2. Vilnius University community is aware of the experiences and needs of individuals with individual needs and is able to respond to them

**Deadline:** 1st of July 2022

**Measurement indicator:** at least 300 students participated in the
initiatives implemented by VU SR and gained new knowledge about the
experiences and needs of individuals with individual needs.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection :items="vusaGoals['2']" english></TimelineItemSection>
</NConfigProvider>

::: tip What has been done?

- Knowledge provided to the university community through the use of
  social media and personal experiences, while providing a
  professional perspective in the implementation of training.
- A
  communication guide has been prepared.
- In cooperation with VU
  Community Development Department and the public institution
  \"Vilties žiedas\", the aim is to expand opportunities for students
  with individual needs for the provision of assistance.
- Currently, an
  exhibition, a screening of the film and a social initiative are
  organized to draw attention to the visible and invisible
  difficulties and communication flaws faced by members of the
  community with disabilities.
  :::
