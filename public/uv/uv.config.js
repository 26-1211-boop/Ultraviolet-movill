/**
 * Ultraviolet Service Worker & BareMux Registration
 */

async function registerSW() {
    if (!('serviceWorker' in navigator)) {
        throw new Error('Service Worker를 지원하지 않는 브라우저입니다.');
    }

    
    await navigator.serviceWorker.register('/sw.js', {
        scope: __uv$config.prefix
    });


    if (window.BareMux) {
        const connection = new BareMux.BareMuxConnection('/baremux/worker.js');
        
        
        await connection.setTransport('/baremod/index.mjs', [
            'https://bare.benrogo.net/'
        ]);
    }
}


registerSW().catch((error) => {
    console.error('Service Worker 등록 중 오류 발생:', error);
});
