<template>
    <div class="educated">
        <div class="school" v-for="school in schools" :key="school.name">
            <div class="name">{{ school.name }}</div>
            <div class="info" v-if="school.major">{{ school.major }}</div>
            <div class="info" v-if="school.grade">{{ school.grade }}</div>
            <div class="info" v-if="school.start && school.end">{{ school.start }} - {{ school.end }}</div>
            <div class="info" v-if="school.location">{{ school.location }}</div>
            <div class="info" v-if="school.education">{{ school.education }}</div>
            <div class="experence" v-if="school.experence">{{ school.experence }}</div>

        </div>
    </div>

</template>

<script setup>
const props = defineProps(['schools'])
</script>