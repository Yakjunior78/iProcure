<script>
import {dispatch} from "../../helpers/vuex";
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters([
			'country'
		]),
		countryId() {
			return this.$route.params.id;
		}
	},

	methods: {
		getCountry() {
			dispatch(
				'FETCH',
				'country',
				{},
				'countries',
				'auth/countries/'+this.countryId,
				'fetching'
			);
		},

		goTo(route) {
			this.$router.push({ name: route });
		}
	},

	mounted() {
		this.getCountry();
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
							@click="goTo('countries')"
							class="flex items-center space-x-5 bg-gray-100 hover:bg-gray-200 py-2 px-3 rounded-sm cursor-pointer">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
								</svg>
							</div>
						</div>
					</div>

					<div class="w-14/20 px-2">
						<p class="text-lg font-semibold text-gray-800">
							{{ country.name }}
						</p>
					</div>

					<div class="flex-1 flex justify-end">
						<el-button
							size="large"
							class="flex items-center bg-gray-800 hover:bg-gray-900 text-white"
							>
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
								</svg>
							</span>

							<span class="pl-3">
								Edit
							</span>
						</el-button>
					</div>
				</div>
			</div>
		</header>

		<main class="flex-grow w-full">
			<div class="w-full sm:w-18/20 md:w-15/20 lg:w-10/20 mx-auto py-5">
				<div class="bg-white border rounded-md">
					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Country Code:
						</div>

						<div class="">
							{{ country.iso2CountryCode }}
						</div>
					</div>

					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Phone Code:
						</div>

						<div class="">
							{{ country.phoneCode }}
						</div>
					</div>

					<div class="py-3 border-b w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Currency Code:
						</div>

						<div class="">
							{{ country.currencyCode }}
						</div>
					</div>

					<div class="py-3 w-full px-4">
						<div class="text-[12px] font-medium text-gray-500">
							Timezone:
						</div>

						<div class="">
							{{ country.timezone }}
						</div>
					</div>
				</div>
			</div>
		</main>
	</section>
</template>
