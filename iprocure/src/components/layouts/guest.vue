<script>
export default {};
</script>

<template>
  <section class="h-screen w-full flex flex-col py-10">
    <header class="w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto">
      <div class="">
	      <p>i-procure</p>
      </div>
    </header>

    <main class="flex-grow h-64 w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto my-3">
      <div class="h-full w-full py-10">
        <RouterView />
      </div>
    </main>

    <footer class="w-full sm:w-18/20 md:w-15/20 lg:w-5/20 mx-auto">
	    <p>Powered by i-procure ltd © 2022</p>
    </footer>
  </section>
</template>
