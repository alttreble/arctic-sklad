<script>
	let autor = 'Axl';
	async function getUoms() {
		let results = await fetch('http://localhost:4000/', {
			method: 'POST',

			headers: {
				'Content-Type': 'application/json'
			},

			body: JSON.stringify({
				query: `uoms {
                            edges {
                                node {
                                    id
                                    name
                                    items {
                                        name
                                    }
                                }
                            }
                        }`
			})
		});
		let uoms = await results.json();
        return uoms
	}

	let uoms = getUoms();
</script>

<h1>The autor is {autor}</h1>

<p>{uoms.uoms.edges[0].node.name}</p>
