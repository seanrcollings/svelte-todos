<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		height: 100vh;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}

	main {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
