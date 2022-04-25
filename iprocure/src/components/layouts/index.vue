<script setup lang="ts">
import DefaultLayout from "./default.vue";
import GuestLayout from "./guest.vue";
import {markRaw, ref, watch} from "vue";
import store from "@/store";

const layout = ref();

watch(
	() => store.getters.isAuthenticated as string | undefined,
	async () => {
		layout.value = store.getters.isAuthenticated
			? markRaw(DefaultLayout)
			: markRaw(DefaultLayout);
	},
	{immediate: true}
);
</script>

<template>
	<component :is="layout">
		<router-view/>
	</component>
</template>
