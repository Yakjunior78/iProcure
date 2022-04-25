<script>
import {mapGetters} from "vuex";
import ProfileEdit from './edit.vue';

export default {
	components: {
		ProfileEdit
	},

	computed: {
		...mapGetters([
			'authUser'
		]),
		user() {
			return this.authUser?.user;
		}
	}
}
</script>

<template>
	<section class="w-full h-full flex flex-col">
		<header>
			<div class="w-full sm:w-18/20 md:w-15/20 lg:w-10/20 mx-auto py-5">
				<div class="w-full h-full flex items-center">
					<div class="w-2/20 flex">
						<div
							class="flex items-center space-x-5 bg-gray-100 hover:bg-gray-200 p-3 rounded-full cursor-pointer">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</div>
						</div>
					</div>

					<div class="w-14/20 px-2">
						<p class="text-lg font-semibold text-gray-800">
							{{ user?.firstName }} {{ user?.lastName }}
						</p>
					</div>

					<div class="flex-1 flex justify-end">
						<profile-edit />
					</div>
				</div>
			</div>
		</header>

		<main class="flex-grow w-full">
			<div class="w-full sm:w-18/20 md:w-15/20 lg:w-10/20 mx-auto py-5">
				<div class="bg-white border rounded-md">
					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Full Name:
						</div>

						<div class="">
							{{ user?.firstName }} {{ user?.lastName }}
						</div>
					</div>

					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							User Name:
						</div>

						<div class="">
							{{ user?.username }}
						</div>
					</div>

					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Phone Number:
						</div>

						<div class="">
							{{ user?.phoneNumber }}
						</div>
					</div>

					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Email Address:
						</div>

						<div class="">
							{{ user?.email }}
						</div>
					</div>
				</div>
			</div>
		</main>
	</section>
</template>
