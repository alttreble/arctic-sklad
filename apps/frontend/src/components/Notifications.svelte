<script lang="ts">
	import { Card, CardContent, Typography, Divider } from '../lib/index.js';

	let quantity = true;
	let expiration = true;
	let minQantity = 10;
	let expirationTimeWarning = "1 Месец";
</script>

<Card class="bg-white space-y-10">
	<CardContent class="flex flex-col">
		<Typography variant="h6" class="mb-4">Известия</Typography>
		<div class="flex gap-5 items-start">
			<input type="checkbox" class="accent-gray-500 mt-1.5" bind:checked={quantity} />
			<div>
				<Typography>Извести при ниско количество</Typography>
				{#if quantity}
					<Typography class="text-[11px] mt-2 font-bold text-gray-500">
						МИНИМАЛНО КОЛИЧЕСТВО:
					</Typography>
					<input
						type="number"
						bind:value={minQantity}
						class="bg-gray-100 rounded-md text-center w-12 text=gray-100"
					/>
				{/if}
			</div>
		</div>
		<Divider class="my-4" />
		<div class="flex items-start gap-5">
			<input type="checkbox" class="accent-gray-500 mt-1.5" bind:checked={expiration} />
			<div>
				<Typography>Извести при наближаващо изтичане на срок</Typography>
				{#if expiration}
					<Typography class="text-[11px] mt-2 font-bold text-gray-500">ИЗВЕСТИ ПРЕДИ:</Typography>
					<select name="Месеци" class="bg-gray-100 text-sm p-1 rounded-md"  required bind:value={expirationTimeWarning}>
						<option value="1 Месец">1 Месец</option>
						<option value="2 Месец">2 Месеца</option>
						<option value="3 Месец">3 Месеца</option>
						<option value="4 Месец">4 Месеца</option>
					</select>
				{/if}
			</div>
		</div>
	</CardContent>
</Card>
