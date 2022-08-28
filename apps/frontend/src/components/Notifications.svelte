<script lang="ts">
	import { Card, CardContent, Typography, Divider } from '../lib/index.js';
</script>

<Card class="bg-white space-y-10">
	<CardContent class='flex flex-col'>
		<Typography variant="h6" class='mb-4'>Известия</Typography>
		<div class="flex gap-5">
			<input type="checkbox" class="accent-black"/>
            <Typography>
                Извести при ниско количество
            </Typography>
		</div>
		<Divider class='my-4'/>
		<div class="flex items-start gap-5">
			<input type="checkbox" class="accent-black"/>
            <Typography>
                Извести при наближаващо изтичане на срок
            </Typography>
		</div>
	</CardContent>
</Card>
