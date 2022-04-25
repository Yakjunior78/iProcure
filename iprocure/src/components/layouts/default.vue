<script>
import Sidebar from "../../components/menus/sidebar.vue";
import Topbar from "../../components/menus/topbar.vue";
import {mapGetters} from "vuex";
import {mutate} from "@/helpers/vuex";

export default {
	components: {
		Sidebar,
		Topbar
	},

	computed: {
		...mapGetters([
			'collapsed'
		])
	},

	methods: {
		toggleCollapse() {
			mutate('collapsed', false, 'layout');
		}
	}
};
</script>

<template>
	<section class="w-full h-screen flex flex-col">
		<main class="w-full h-full flex flex-row">
			<div
				class="z-50 h-full border-r border-gray-100 bg-gray-900 text-white absolute md:relative md:-translate-x-0 inset-y-0 left-0 transform transition-all duration-1600 ease-in-out"
				:class="[ collapsed ? '-translate-x-full' : '', !collapsed ? 'w-2/5 lg:w-1/20' : 'w-10/20 sm:w-4/20 md:4/20 lg:w-1/20' ]"
			>
				<sidebar/>
			</div>

			<div class="h-full flex-1 bg-white-50">
				<section class="h-full w-full flex flex-col">
					<header>
						<topbar/>
					</header>

					<main class="flex-grow w-full h-64">
						<div class="w-full h-full p-5 px-10 overflow-y-auto">
							<RouterView/>
						</div>
					</main>
				</section>
			</div>
		</main>
	</section>
</template>
