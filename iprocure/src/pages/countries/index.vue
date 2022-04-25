<script>
import {dispatch} from "../../helpers/vuex";
import {mapGetters} from "vuex";
import {formatDate} from "../../utils/filters";

export default {
	computed: {
		...mapGetters([
			'countries'
		]),

		countryArr() {
			return this.countries;
		}
	},

	methods: {
		fetchSubjects() {
			dispatch(
				'FETCH',
				'countries',
				{},
				'countries',
				'auth/countries',
				'fetching'
			);
		},

		formatDate(date) {
			return formatDate(date);
		},

		view(id) {
			this.$router.push({ name: 'countryView', params: { id: id }})
		},

		edit(country) {
			console.log('COUNTRY TO EDIT : ', country);
		}
	},

	mounted() {
		this.fetchSubjects();
	}
}
</script>

<template>
	<section class="w-full h-full flex flex-col">

		<header class="w-full">
			<div class="w-full flex justify-between">
				<div class="">
					<p class="text-sm text-gray-400">View and manage all countries here</p>
				</div>

				<div class="flex justify-end">
					<div class="">
						<el-button
							size="large"
							class="bg-gray-800 text-white py-4 px-8 rounded-md flex space-x-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>

							<span>Add country</span>

						</el-button>
					</div>
				</div>
			</div>
		</header>

		<main class="flex-grow h-64 py-10 overflow-y-scroll">
			<div class="h-full w-full">
				<div
					class="w-full grid grid-flow-row-dense lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6">

					<section
						v-for="(country, key) in countryArr"
						:key="key"
						class="flex flex-col border bg-white rounded-md p-8 flex flex-col space-y-4">

						<main class="flex-grow text-[14px] text-gray-500 text-justify">
							<div class="w-full h-full flex items-center">
								<div class="w-3/20 flex">
									<p class="bg-gray-600 flex items-center text-white text-[12px] rounded-sm px-2 py-1">
										{{ country.iso2CountryCode }}
									</p>
								</div>

								<div class="w-13/20 px-2">
									<p class="text-lg font-semibold text-gray-800">
										{{ country.name }}
									</p>
								</div>

								<div class="flex-1 flex justify-end">
									<el-button
										@click="view(country.id)"
										class="bg-gray-200 py-1"
										size="medium">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</el-button>
								</div>
							</div>
						</main>
					</section>
				</div>
			</div>
		</main>
	</section>
</template>
