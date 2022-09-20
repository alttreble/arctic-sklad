<script lang="ts">
    import type { ItemEdge } from '../../generated/graphql';
    import Container from '$lib/components/Container.svelte';
    import { ChevronLeft } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';


    export let items: ItemEdge[] 
    

    console.log(items)
</script>

<Container>
    <div class='mb-5'>
        <a href='/' class='flex items-center mt-10 mb-1'>
            <Icon class='w-4 h-4' src={ChevronLeft} />
            <p>Назад</p>
        </a>
    </div>
    
    <DataTable class="bg-white">
        <Head>
            <Row>
              <Cell>Име</Cell>
              <Cell style="width: 100%;">Състояние</Cell>
              <Cell numeric>Брой</Cell>
            </Row>
          </Head>
          <Body>
          </Body>
    </DataTable>
</Container>
