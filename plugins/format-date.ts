export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatDate(date) {
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return new Date(date).toLocaleDateString('en', options);
            }
        }
    };
});
