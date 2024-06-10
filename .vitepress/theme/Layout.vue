<script setup lang="ts">
import { Content, useData } from 'vitepress'

import Profile from './Profile.vue'
import Educated from './Educated.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
const data = frontmatter.value
</script>

<template>
  <div class="resume">
    <Profile :me="data.me" />
    <div class="title">教育经历</div>
    <Educated :schools="data.schools" />
    <Content />
  </div>
</template>
