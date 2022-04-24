<script>
	export default {};
</script>

<template>
	<section class="w-full h-screen flex flex-col bg-gray-800">
		<main class="w-full h-full flex flex-row">
			<div
				class="h-full w-1/20 border-r border-gray-100 bg-gray-900 text-white"
			>

			</div>

			<div class="h-full flex-1 bg-white-50">
				<div class="h-full w-full flex">
					<RouterView/>
				</div>
			</div>
		</main>
	</section>
</template>
