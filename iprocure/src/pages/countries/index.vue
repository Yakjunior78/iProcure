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
			return this.countries.data;
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
					<p class="text-xl font-bold text-gray-800">
						Countries
						<br>
					</p>
					<p class="text-sm text-gray-400">View and manage all countries here</p>
				</div>

				<div class="flex justify-end">
					<div class="">
						<el-button
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

							<span>New module</span>

						</el-button>
					</div>
				</div>
			</div>
		</header>

		<main class="flex-grow h-64 py-10 px-20 overflow-y-scroll">
			<div class="h-full w-full">
				<div
					class="w-full grid grid-flow-row-dense lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8">

					<section
						v-for="(country, key) in countryArr"
						:key="key"
						class="flex flex-col shadow-md bg-white rounded-md p-8 flex flex-col space-y-4">

						<header class="w-full">
							<div class="text-teal-500 font-bold text-xs uppercase">
								{{ formatDate(country.updated_at) }}
							</div>

							<div class="font-semibold text-xl text-gray-800">
								{{ country.name }}
							</div>
						</header>

						<main class="flex-grow text-[14px] text-gray-500 text-justify">
							{{ country.description }}
						</main>

						<footer class="pt-5">
							<div class="flex items-center space-x-3">
								<el-button
									class="border py-3 px-4 rounded-md flex ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
									</svg>
								</el-button>

								<el-button
									class="bg-gray-800 text-white py-3 px-4 rounded-md">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
									</svg>
								</el-button>
							</div>
						</footer>
					</section>
				</div>
			</div>
		</main>
	</section>
</template>
