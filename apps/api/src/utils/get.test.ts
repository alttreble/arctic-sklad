import get from '@app/utils/get';

it("should get sub-attribute from array attribute", () => {
	const object = {
		arr: [
			{
				attr: 1
			},
			{
				attr: 2
			}
		]
	};

	const expectedRes = [1, 2]
	const res = get(object, "arr.attr")
	expect(res).toStrictEqual(expectedRes)
})

it("should get sub-attribute from object attribute", () => {
	const object = {
		attribute: {
			subattribute: 2
		}
	}
	const expectedRes = 2
	expect(get(object, "attribute.subattribute")).toBe(expectedRes)
})
