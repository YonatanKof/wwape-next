export default defineNuxtPlugin(() => {
	return {
		provide: {
			formatDate(date: string | number | Date) {
				const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
				return new Date(date).toLocaleDateString('en', options);
			},
		},
	};
});
