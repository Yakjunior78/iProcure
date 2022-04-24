<script>
import Sidebar from "../../components/menus/sidebar.vue";
import Topbar from "../../components/menus/topbar.vue";

export default {
	components: {
		Sidebar,
		Topbar
	},
};
</script>

<template>
	<section class="w-full h-screen flex flex-col">
		<main class="w-full h-full flex flex-row">
			<div
				class="h-full w-1/20 border-r border-gray-100 bg-gray-900 text-white"
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
