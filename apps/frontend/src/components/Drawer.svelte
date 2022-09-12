<script>
	import { Drawer } from '$lib';

	export let open;
</script>

<Drawer
	variant='temporary'
	{open}
	on:close
	direction='bottom'
	class={`
		rounded-t-md bg-white
		md:left-auto md:right-0 md:top-0 md:w-[400px]
		md:rounded-tr-none md:rounded-l-md
	`}
>
	<slot />
</Drawer>
