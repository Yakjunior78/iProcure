<script>
import {routeName} from "@/utils/filters";

export default {

	data() {
		return {
			open: false
		}
	},

	computed: {

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
			this.$store.dispatch('LOG_OUT');
		}
	}
}
</script>

<template>
	<section class="w-full h-full flex justify-between border-b">
		<div
			class="font-medium p-5 px-10">

			<div class="font-bold uppercase text-sm">
				{{ routeName }}
			</div>
		</div>

		<div class="flex items-center space-x-4 px-10">

			<div class="lg:hidden px-6">

			</div>

			<div class="flex flex-row justify-between">

				<div class="mr-10">

				</div>

				<div class="mt-1">
					<el-dropdown>

						<el-button
							circle
							size="mini"
							class="rounded-full border p-1 flex items-center justify-center bg-purple-300">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
						</el-button>

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

								<el-dropdown-item>
									<router-link
										:to="{ name: 'settings' }"
										class="dropdown-item">
										<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"/>
										Settings
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
