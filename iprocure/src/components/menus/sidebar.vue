<script>
import {routesArray} from "@/utils/routes";
import {mapGetters} from "vuex";
import {mutate} from "@/helpers/vuex";

export default {
	computed: {
		...mapGetters([
			'collapsed'
		]),

		menus() {
			return routesArray.filter(route => route.meta.show);
		},

		activeRoute() {
			return this.$route.name;
		},
	},

	methods: {
		toggleCollapse() {
			mutate('collapsed', !this.collapsed, 'layout');
		}
	}
};
</script>

<template>
	<section class="w-full h-full flex flex-col">
		<header class="w-full flex items-center justify-center py-5 px-4">
			<div class="w-full">
				<div
					class="w-full rounded-sm p-1 flex items-center space-x-3 bg-gray-900 justify-center"
				>
					<div
						v-show="collapsed"
						class="font-bold text-xl text-gray-100 pt-1">
						iP
					</div>

					<div
						v-show="!collapsed"
						class="lg:hidden">
						<el-button
							@click="toggleCollapse"
							class="px-1 text-white font-bold">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
							</svg>
						</el-button>
					</div>
				</div>
			</div>
		</header>

		<main class="flex-grow h-64 w-full">
			<div
				class="h-full w-full flex flex-col items-center justify-center space-y-5"
			>
				<router-link
					v-for="(menu, key) in menus"
					:key="key"
					:to="{ name: menu.name }"
				>
					<div
						class="text-gray-500 p-2 rounded-sm flex items-center justify-center hover:text-gray-200"
						:class="{ 'text-gray-200': activeRoute === menu.name }"
					>
						<span v-html="menu.meta.svg"> </span>
					</div>
				</router-link>
			</div>
		</main>

		<footer>
			<div
				class="h-full w-full flex flex-col items-center justify-end space-y-10 py-10"
			></div>
		</footer>
	</section>
</template>
