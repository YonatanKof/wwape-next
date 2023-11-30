export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatDate(date) {
                // const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const options = { year: 'numeric', month: 'short' };
                return new Date(date).toLocaleDateString('en', options);
            }
        }
    };
});
