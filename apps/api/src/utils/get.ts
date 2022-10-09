export default function get<
	TObject extends object
	>(object: TObject, path: string): object {
	const pathSegments = path.toString().split(".")

	let objectAttr: object = object;
	for (let i = 0; i < pathSegments.length; i++) {
		if (!objectAttr) return objectAttr

		if (Array.isArray(objectAttr)) {
			objectAttr = objectAttr.map(attributeElement => attributeElement[pathSegments[i]])
			continue;
		}
		objectAttr = objectAttr[pathSegments[i] as keyof object]
	}
	return objectAttr
};
