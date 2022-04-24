<script>
	export default {};
</script>

<template>
  <section class="h-screen w-full flex flex-col">
	  <header class="w-full">
		  <div class="">
			  <p>We are here</p>
		  </div>
	  </header>

	  <main class="flex-grow w-full h-64">
		  <div class="h-full w-full">
			  <RouterView />
		  </div>
	  </main>

	  <footer class="w-full">
		  <p>Footer</p>
	  </footer>
  </section>
</template>
