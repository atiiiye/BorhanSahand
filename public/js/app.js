if ('serviceWorker' in navigator) {
    navigator
        .serviceWorker
        .register('./../../src/serviceWorker.js', { scope: '.' })
        .then(registration => {
            console.log("registration succeeded :", registration);
        })
    
}