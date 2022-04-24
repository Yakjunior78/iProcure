<script>
export default {};
</script>

<template>
  <section class="h-screen w-full flex flex-col py-10">
    <header class="w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto py-5">
      <div class="flex items-center justify-center">
	      <p class="uppercase font-bold text-xl text-green-700">i-procure</p>
      </div>
    </header>

    <main class="flex-grow w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto my-3">
      <div class="h-auto w-full">
        <RouterView />
      </div>
    </main>

    <footer class="w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto">
	    <p class="text-gray-400 font-medium">Powered by i-procure Ltd © 2022</p>
    </footer>
  </section>
</template>
