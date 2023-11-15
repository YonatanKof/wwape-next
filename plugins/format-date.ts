export default defineNuxtPlugin(() => {
    return {
        provide: {
            // formatDate: (dateStr) => (dateStr ? Intl.DateTimeFormat('us-EN', { dateStyle: 'medium' }).format(new Date(dateStr)) : undefined)
            formatDate(date) {
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return new Date(date).toLocaleDateString('en', options);
            }
        }
    };
});
