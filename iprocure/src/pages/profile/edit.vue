<script>
	import {mapGetters} from "vuex";
	import {AuthService} from "@/services/auth.service";


	export default {
		data() {
			return {
				dialogVisible: false,
				form: {}
			}
		},

		computed: {
			...mapGetters([
				'authUser'
			]),

			user() {
				return this.authUser.user;
			}
		},

		methods: {
			submit() {

				this.form.dateOfBirth = "2000-01-12";
				this.form.avatar = "https://public/image/url";

				AuthService.update(this.form);
			}
		},

		mounted() {
			this.form.firstName = this.user.firstName;
			this.form.lastName = this.user.lastName;
		}
	}
</script>

<template>

	<el-button
		@click="dialogVisible = true"
		size="large"
		class="flex items-center bg-gray-800 hover:bg-gray-900 text-white"
	>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
			</svg>
		</div>

		<div class="pl-3">
			Edit
		</div>
	</el-button>

	<el-dialog
		:show-close="false"
		v-model="dialogVisible"
		width="40%">

		<section
			class="h-full flex flex-col">

			<header class="w-full">
				<div class="border-b py-5 px-10">
					<p class="font-semibold text-gray-800 text-xl uppercase">Edit Profile</p>
				</div>
			</header>

			<main class="flex-grow w-full">

				<div class="h-full p-10">
					<form action="" class="">
						<div class="w-full flex items-center space-x-4">
							<div class="w-1/2 mb-5">
								<div class="font-semibold text-sm text-gray-600 mb-1">First Name</div>

								<div class="">
									<el-input
										v-model="form.firstName"
										placeholder="Enter your username"
										size="large"
										style="width: 100%"
									/>
								</div>
							</div>

							<div class="w-1/2 mb-5">
								<div class="font-semibold text-sm text-gray-600 mb-1">Last Name</div>

								<div class="">
									<el-input
										v-model="form.lastName"
										placeholder="Enter your username"
										size="large"
										style="width: 100%"
									/>
								</div>
							</div>
						</div>

						<div class="w-full flex items-center space-x-4">
							<div class="w-full mb-5">
								<div class="font-semibold text-sm text-gray-600 mb-1">Date of Birth</div>

								<div class="">
									<el-date-picker
										v-model="form.dateOfBirth"
										type="date"
										size="large"
										placeholder="Pick a day"
										style="width: 100%"
									/>

								</div>
							</div>
						</div>

						<div class="w-full flex items-center space-x-4">

							<div class="w-full mb-5">
								<div class="font-semibold text-sm text-gray-600 mb-1">Avatar</div>

								<div class="">
									<el-input
										v-model="user.avatar"
										placeholder="Enter your username"
										size="large"
										style="width: 100%"
									/>
								</div>
							</div>
						</div>

					</form>
				</div>
			</main>

			<footer class="w-full py-5 px-10 border-t">
				<div class="w-full flex space-x-4 items-center justify-end">
					<el-button
						size="large"
						class="bg-gray-200 hover:bg-purple-100 focus:shadow-outline focus:outline-none text-purple-400 font-bold py-2 px-4 rounded"
						type="button"
						@click="dialogVisible = false">
						<i class="el-icon-back mr-2"/>
						Cancel
					</el-button>

					<el-button
						size="large"
						class="bg-gray-900 shadow hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
						type="button"
						@click="submit()">
						<i class="el-icon-back mr-2"/>
						Update
					</el-button>
				</div>
			</footer>

		</section>
	</el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
	margin-right: 10px;
}
</style>
