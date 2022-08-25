<script lang="ts">
import Divider from "$lib/components/Divider.svelte";
import type {ItemEdge} from "../generated/graphql";
import { Card, CardContent, Container, Stack, Typography} from "../lib/index.js";

export let item: ItemEdge;

</script>

<Container>
    <Stack>
        <Card class="bg-white">
            <CardContent class="flex flex-col" >
                <Typography variant="h6" class="pb-5">
                    {item.node?.name}
                </Typography>
                <Typography variant="subtitle1">
                    Количесто:
                </Typography>
                <Typography>
                   <strong> X {item.node?.uom.name} </strong>
                </Typography>
                <Divider class="my-5"/>
            </CardContent>
        </Card>
    </Stack>
</Container>  


<style>
    

</style>



