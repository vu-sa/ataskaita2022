---
outline: deep
---

<script setup lang="ts">
import { NConfigProvider, darkTheme } from 'naive-ui'
import { useMutationObserver } from '@vueuse/core'
import { ref } from 'vue'
import TimelineItemSection from '../../../components/TimelineItemSection.vue'
import padaliniaiGoals from '../../../data/padaliniaiGoals.EN.ts'

// check if there's html class dark
const dark = ref(document.documentElement.classList.contains('dark'))

// watch for changes in html class
useMutationObserver(document.documentElement, () => {
  dark.value = document.documentElement.classList.contains('dark')
}, { attributes: true, attributeFilter: ['class']})
</script>

# Goals set in VU SR divisions

## Faculty of Chemistry and Geosciences

### 3. On 1st of April 2022, an analysis of the compulsory subjects of two (geography and chemistry) study programs of the first cycle of studies were carried out.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['3']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- A study program guide was obtained, which would be used for analysis
  with comments and tips on how to apply it. Questions were also
  prepared, which will be presented to student representatives and
  contact people in order to find out which study subjects should be
  applied to the study program guide when calculating the real credit
  load.
  :::

## Faculty of Economics and Business Administration

### 4. By 30th of June 2022, VU EVAF lecturers know and use convenient and student-inclusive methods, therefore, at least 70% of the students will be able to use them. Students who have completed surveys are satisfied with the interactive teaching methods used by the lecturers.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['4']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The creation of the working group gathered useful information from
  students and lecturers on distance learning (what are the main
  disadvantages and how they could be changed, what methods are
  already used, functions have been confirmed in distance learning
  practice). With this in mind, a memo for lecturers with various tips
  and an introduction to online platforms has been created. The memo,
  approved by the Vice-Dean of VU EVAF, will soon be sent to all
  lecturers. Towards the end of the semester, we will actively
  encourage students to complete study surveys and collect feedback,
  which will then be shared on social networks.
  :::

### 5. On 30th of June 2022, the academic community of VU EVAF knows and adheres to the description of the procedure for preparing, defending, evaluating and storing written works of VU EVAF Students.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['5']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- Links of the description and other useful documents were shared with
  the students, a memo with the most frequently asked questions from
  the description was prepared, made public and shared with the
  representatives of the group with the students.
- All students of the
  final courses had a seminar on the preparation of coursework (as a
  result, it took a long time to convince the Economic SPC). After
  analyzing the data of the surveys of VU IS for the autumn semester,
  the problems faced by students when preparing coursework,
  Bachelor\'s and Master\'s thesis, were also identified and presented
  to the vice-dean of studies R. Adomaitienė.
- It is planned to extend
  the discussion about these issues during the debate of candidates
  for the deans of VU EVAF.
  :::

## Faculty of Physics

### 6. By 1st of May 2022, a plan for the renewal of laboratory work at the Faculty of Physics of Vilnius University has been prepared.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['6']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- An analysis of good experiences in the implementation of laboratory
  work of other VU departments, universities (Lithuania and abroad)
  was carried out, as well as the methodologies to be applied at the
  Vilnius University Faculty of Physics were selected. Currently, the
  concept of laboratory work is being developed in cooperation with
  both older members of VU SR and VU FF administration.
  :::

### 7. On 1st of September 2022, the implementation of the academic integration plan for VU FF Master's first-year students who have completed bachelor\'s studies in other VU departments/universities is prepared.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['7']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- An analysis of the good experiences of the implementation of
  laboratory work of other VU departments, universities (Lithuania and
  abroad) was carried out, two proposals were cashed out: levelling
  courses and excursions to laboratories. The proposals were presented
  to the Vice-Dean of Studies of VU FF, who supported them. Further
  discussions on the achievement of the objective are currently being
  prepared.
  :::

## Faculty of Phylology

### 8. During the 2021-2022 academic year, VU FLF is informed about the importance of an open and safe emotional environment, where student-teacher relations are based on mutual respect and community members know where they can turn for psycho-emotional health problems

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['8']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- Student survey was done on psycho-emotional health in the unit. The
  results of the survey were shared with the Dean of Faculty and it
  was decided that the community should be informed about the
  importance of psycho-emotional. It is planned to carry out an event
  dedicated to the community on the topic of psycho-emotional
  importance.
  :::

### 9. On 15th of June 2022, on the basis of the document defining the principles of scheduling adopted by VU FLF, schedules of at least 20% of tier Bachelors and Marsters program groups have been drawn up.

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['9']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The students\' opinion on the schedules of this academic year has
  been collected, based on the results obtained, it is planned to
  prepare guidance guidelines for the preparation of schedules.
  :::

## Faculty of Philosophy

### 10. By 1st of July 2022, the reasons for poor communication with students by VU FSF lecturers have been clarified and described

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['10']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- A questionnaire for VU FsF lecturers has been compiled, which will
  help to find out the peculiarities of their communication with
  students: the load of incoming letters, the most commonly used and
  to be used communication platforms. The questionnaire will be sent
  to all faculty lecturers.
- At the same time, meetings with the
  contact persons of the unit are planned in order to be able to
  review the situation from their perspective as well. The collected
  information will be processed and described in a single document,
  which will include proposals based on the analysis (as well as the
  format for their submission) on how to improve communication between
  teachers and students.
  :::

## Gyvybės mokslų centre

### 11. By 1st of September 2022, the lists of elective subjects of at least two students of the 1st (bachelor\'s) cycle programs at VU GMC (not in line with previous semesters) increase by at least 1 new or already taught subject

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['11']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- With students facing a limited number of optional courses (OC) and
  growing groups of students, the stated goal was primarily pursued in
  the discussion at the Board of Studies. In cooperation with the
  Deputy Director of the GMC for Studies and the representative of
  doctoral students, a solution was found – to increase the number of
  OCs for doctoral students by creating new OCs. Those who wanted to
  start teaching their subject appeared immediately, however, faced
  with technical obstacles, the solution would require the approval of
  VU Senate.
- In addition, comments from all lecturers and students
  teaching PD were collected, according to which the informal
  description of the center\'s OC will be completed, which will allow
  students to choose PD in the form of an ISP and other programs.
  :::

## Faculty of History

### 12. The topics specified in the description of the module (subject) of the Study Introduction (Cultural history and anthropology and History Study Programs) updated by 1 July 2022 are detailed, correspond to the objectives of studies and the even learning load

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['12']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- An analysis of Historical archaeology, Cultural history and
  anthropology and History studies introduction modules was carried
  out. The analysis helped to understand how the description of the
  module could be updated and will allow to apply to the Faculty
  Administration in a reasoned and with proposals in order to improve
  the quality of the Statutes of studies module.
  :::

### 13. By 1st of July 2022, the process of teaching foreign subjects of a specialty provides the student with the abilities to communicate in writing and orally in academic, social and professional activities

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['13']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- A foreign language monitoring plan has been developed, which will be
  launched at the end of this spring semester. The plan will help to
  monitor the quality of language learning in the specialty and will
  allow to react earlier in case of deterioration of the situation. A
  meeting with the members of the Russian Philology and Russian
  studies Study program committee was also planned, but it was
  reported that in order to update the module description, you must
  first contact the SPC of your faculty. Therefore, the results of the
  analysis of foreign languages of the specialty will be presented at
  the upcoming meeting of the Historical SPC.
  :::

## Faculty of Communication

### 14. By 1st of July 2022, according to the system developed by VU SA KF and VU KF student representatives, at least 6 1st and 2nd cycle study programs have been prepared and at least 75% implemented the annual action plan

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['14']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- Outside the joint committees of bachelor\'s degree programs, the
  number of student representatives rose to 2. Missing student
  representatives were elected to the committees of bachelor\'s and
  master\'s degree programs. In cooperation with representatives of VU
  SA KF and VU KF students, a system of activities of student
  representatives has been established, which will help to make
  student representation and cooperation more effective. Closer
  cooperation between student representatives and course contact
  people is encouraged. During the integration of freshmen and on the
  Facebook page of VU SA KF, representatives of SPC students and their
  activities were presented. A template for the student representative
  year\'s activity plan was prepared, which began to be completed.
  :::

## Faculty of Kaunas

### 15. On 30th of April 2022, more than 85% of VU KnF students would recommend studying at VU

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['15']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The Virtual learning environment (VLE) course review and SP
  improvement plans have been implemented – the relevant SP includes
  specializations, new GUS subjects, strange study grids and OC. The
  foundations for the establishment of the Debate Club have been
  created, the initiative of first-year students interested in
  entrepreneurship and investment has been prepared and presented to
  the administration. The basics for the integration of foreign
  students into the activities of VU SA KnF were created – BA and MA
  foreign students were introduced to the activities of VU SA KnF, VU
  SA KnF social media posts were translated into English, general
  meetings were started to be conducted in English, foreign students
  participated in them. Curators have been appointed for foreign
  students. An agreement has been reached with VU and VU KnF on the
  date and progress of the start of the research project of VU KnF
  dormitory. A project for the installation of a new student science
  space has been prepared on the faculty premises.
  :::

### 16. On 1st of July 2022, VU SA KnF implemented initiatives that respond to the vision of the green university

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['16']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- In cooperation with the VU academic community, Lithuanian and
  foreign initiatives promoting and responding to a clean and
  sustainable lifestyle, the communication campaign information cycle
  \"Green Message\" has been prepared. At the VU SA KnF event \"River
  of Souls 2021\", polluting and unsorted paraffin candles were
  presented, they were replaced by LED candles, which are durable and
  easy to sort. At VU SA KnF events, the consumption of non-recyclable
  resources was reduced by 80%.
  :::

## Faculty of Medicine

### 17. On 1st of July 2022, foreign students of VU MF feel full members of the community and know and receive relevant information in a timely manner

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['17']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The administration of the MF set itself the goal of updating the
  website of the Faculty of Medicine, while updating the information
  available in English. International students, together with the VU
  SA MF team, created an exclusive Medi Week, in which all activities
  were carried out in English. Work will continue on the refurbishment
  of the GUS.
  :::

### 18. On 30th of June 2022, an electronicized system for assessing the practical skills acquired during the internship registration and internment was developed

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['18']"></TimelineItemSection>
</NConfigProvider>

## Faculty of Mathematics and Informatics

### 19. On 30th of April 2022, at least 3 new initiatives connecting the VU MIF community were implemented

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['19']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- A series of events was organized involving the VU MIF community. It
  consists of three events, two of which have already taken place, and
  the third, which is planned for May, has already started to be
  organized. Activities aimed at the reintegration of sophomores have
  also been implemented: the first of September procession, mini-MIDI
  training, community evenings, etc. In VU MIF spaces, vitality is
  observed; the impact of COVID-19 on social inclusion is weakened.
  The continuity of the activities promoting assistance to \"Student
  – For a student\" was ensured: a manager and a team were found,
  modules of subjects unclear to students were clarified, for which
  the \"Student – For a student\" team could give lectures. Selected
  indicators for assessing the effectiveness of these initiatives:
  change in the number of participants at events, results of autumn
  and spring semester surveys on well-being in the community.
  :::

### 20. On 1st of July 2022, representatives of students of each VU MIF SPC have raised problems relevant to the improvement of their SP, of which at least 1 has been solved by the SPC

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['20']"></TimelineItemSection>
</NConfigProvider>

## Šiauliai Academy

### 21. On 1st of July 2022, the scope of reports of professional practitioners of at least 1 VU ŠA 1st cycle study programs has been adjusted, reducing the scope of each task

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['21']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The representative\'s coordinator of VU SA ŠA managed to contact the
  chairmen of the SPC directly and agree on the reduction of the scope
  of practice reports. Proposals were approved at the SPC meeting.
  :::

### 22. On 29th of March 2022, the list of members of VU SA ŠA includes at least 27 members

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['22']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- There are 26 members. There was a week of initiation and a freshman
  camp at VU SA ŠA.
  :::

## Faculty of Law

### 23. On 2nd of May 2022, at least 5 initiatives to develop a culture of academic literacy have been organized at VU TF

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['23']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- During the fall months of 2021, a survey of students and lecturers
  was conducted to find out the problems of academic literacy of
  students. On their basis, a lecture on the peculiarities of writing
  coursework, dissemination of residual information material with
  students was implemented (\"Writing coursework: from A to Z\"). More
  attention and dissemination were paid to the VU TF Students'
  Scientific Society project: the lingering video material about the
  writing and presentation of a scientific article was posted on the
  VU SA TF Facebook page. Publicity of information about academic
  literacy on VU SA TF social networks was carried out. A lecture /
  seminar on the preparation of legal documents is planned.
  :::

### 24. On 11th of April 2022, the evaluation sections of at least 10 full-time subjects of the I-VII semesters of law studies at VU TF are detailed and approved by the SPC

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['24']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The descriptions of the subjects of the 2020-2021 VU TF legal
  studies I-VII semesters were analyzed and commented on, and
  recommendations for improvement were attached. Detailed descriptions
  of subjects were also analyzed when comparing them with others,
  comments were made on how to improve incomplete descriptions of
  things.
  :::

## Faculty of International Relations and Political Science

### 25. On 1st of July 2022, VU TSPMI Master\'s students are given the opportunity to choose an additional foreign language in the form of non-study program subjects and 70% of the total number of students. They are informed about other existing opportunities to learn additional foreign languages at Vilnius University

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['25']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- The possibilities of opening the system were clarified, the
  information was passed on to the President of VU SR. The need was
  also collected from other VU ACU, the information was presented to
  the central administration. This issue should be resolved at the
  time of release of 30 / 60 credits. Other opportunities to learn
  foreign languages in University (e.g., Language school, individual
  study plan).
  :::

### 26. On 1st of July 2022, at least 2 proactive measures to improve the psychosocial environment of VU TSPMI are in operation and at least 15% of VU TSPMI community members have used them

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['26']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- In cooperation with VU Psychological Counseling and Training Center
  (VU PCTC), the idea of an app designed to assess your psychological
  state has been transmitted. In cooperation with VU TSPMI
  administration, VU PCTC, VU Student Affairs and Career Office, a
  communication campaign was launched, a podcast was created, where
  students can recognize their psychological state and take care of
  it. The issue of improving the psychosocial environment and access
  to consultations was raised during the sittings of the Rectorate of
  VU and the VU Senate. Currently, VU TSPMI is looking for a
  psychologist for the community, and from September it is planned
  that a second academic consultant will appear at the institute.
  :::

## Business School

### 27. On 30th of September 2022, at least 3 scientific articles of VU VM students will be published in the media

<NConfigProvider :theme="dark ? darkTheme : undefined">
  <TimelineItemSection english :items="padaliniaiGoals['27']"></TimelineItemSection>
</NConfigProvider>

::: tip What was done?

- At the beginning of the school year, the coordinator of VU SA VM
  Students' Scientific Society (SSS) was found and a job description
  for this position was created. Meetings were organized with VU VM
  administration staff, which were attended by the Chairman of VU SA
  VM and coordinator of VU SA VM SSS, and it was during these meetings
  that the ideas of the activities and implementation of VU SA VM SSS
  were improved. With the help of the administration, mentors are
  sought to help students carry out scientific activities.
  :::
