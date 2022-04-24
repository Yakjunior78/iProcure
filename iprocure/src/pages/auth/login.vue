<script>
	import {AuthService} from "../../services/auth.service";

	export default {
		data() {
			return {
				form: { clientType: "web" }
			};
		},

		methods: {
			submit() {
				AuthService.login(this.form);
			}
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
