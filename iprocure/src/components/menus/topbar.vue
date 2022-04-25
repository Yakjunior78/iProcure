<script>
import {routeName} from "@/utils/filters";
import {mapGetters} from "vuex";
import {mutate} from "@/helpers/vuex";

export default {

	data() {
		return {
			open: false
		}
	},

	computed: {
		...mapGetters([
			'collapsed'
		]),

		routeName() {
			return routeName(this.$route.name);
		},

		activeParent() {

			let path = this.$route.fullPath;

			let arr = path.split('/');

			return arr.length > 0 ? arr[1] : '';
		},
	},

	methods: {

		logout() {
			localStorage.clear();
			this.$router.push({ name: 'login' });
			location.reload();
		},

		toggleCollapse() {
			mutate('collapsed', !this.collapsed, 'layout');
		}
	}
}
</script>

<template>
	<section class="w-full h-full flex justify-between border-b items-center">
		<div
			class="font-medium p-5 px-10 flex items-center">

			<div
				class="mr-3 lg:hidden">
				<el-button
					@click="toggleCollapse()"
					class="bg-gray-200 p-2 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</el-button>
			</div>

			<div
				class="font-bold uppercase text-sm hidden lg:block">
				{{ routeName }}
			</div>
		</div>

		<div class="flex items-center space-x-4 px-10">

			<div class="flex flex-row justify-between">

				<div class="mt-1">
					<el-dropdown>

						<div
							class="rounded-full border p-2 flex items-center justify-center bg-purple-300 cursor-pointer">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</div>

						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item>
									<router-link
										:to="{ name: 'profile' }"
										class="dropdown-item"
									>
										<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
										Profile
									</router-link>
								</el-dropdown-item>

								<el-dropdown-item class="border-t">
									<a
										class="dropdown-item"
										href="#"
										@click.prevent="logout"
									>
										<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
										Logout
									</a>
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
				</div>
			</div>
		</div>
	</section>
</template>
