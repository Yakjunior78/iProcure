<script>
	import {AuthService} from "../../services/auth.service";
	import {mapGetters} from "vuex";
	import {mutate} from "../../helpers/vuex";

	export default {
		data() {
			return {
				form: { clientType: "web" }
			};
		},

		computed: {
			...mapGetters([
				'errors'
			]),

			generalErrors() {
				return this.errors.filter(error => !error.field)
			}
		},

		methods: {
			submit() {
				AuthService.login(this.form);
			},

			filteredErrors(field) {
				return this.errors.filter(error => error.field === field)
			}
		},

		mounted() {
			mutate('errors', [], 'auth');
		}
	};
</script>

<template>
	<section class="w-full h-full flex flex-col pb-5">
		<header>
			<div class="">
				<div class="">
					<p class="text-xl text-gray-700 font-semibold">Login to i-procure</p>
				</div>

				<div class="">
					<p class="text-sm text-gray-400">
						Enter your username and password to continue
					</p>
				</div>
			</div>
		</header>

		<main class="flex-grow w-full h-64">
			<div class="w-full h-full">
				<div
					v-if="generalErrors.length"
					class="rounded-md bg-red-100 p-5 my-3">
					<div
						class="text-red-500 font-semibold"
						v-for="error in generalErrors">
						{{ error.message }}
					</div>
				</div>

				<form action="" class="py-5">
					<div class="mb-5">
						<div class="font-semibold text-sm text-gray-600 mb-1">Username</div>

						<div class="">
							<el-input
								v-model="form.username"
								placeholder="Enter your username"
								size="large"
							/>
						</div>

						<div class="">
							<div
								class="text-red-600 font-semibold text-[12px]"
								v-for="error in filteredErrors('username')">
								*{{ error.message }}
							</div>
						</div>
					</div>

					<div class="mb-5">
						<div class="font-semibold text-sm text-gray-600 mb-1">Password</div>

						<div class="">
							<el-input
								v-model="form.password"
								type="password"
								placeholder="Enter your password"
								size="large"
							/>
						</div>

						<div class="">
							<div
								class="text-red-600 font-semibold text-[12px]"
								v-for="error in filteredErrors('password')">
								*{{ error.message }}
							</div>
						</div>
					</div>

					<div class="w-full flex justify-end">
						<el-button
							size="large"
							type="submit"
							@click="submit()">
							Login
						</el-button>
					</div>
				</form>
			</div>
		</main>

		<footer>

		</footer>
	</section>
</template>
