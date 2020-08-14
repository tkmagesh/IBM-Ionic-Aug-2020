(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] calling the service`);
        var result = addSync(x,y);
        console.log(`[@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x, y, callback) {
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@Service] returning result`);
            callback(result);
        }, 4000);
    }

    function addAsyncClient(x, y) {
        console.log(`[@Client] calling the service`);
        addAsync(x, y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;
})();

/* 
1. callback
2. event 
3. promise
4. async await
5. generators
6. observables
*/