function giveItBackLater(value,callback) {
    function loadComplete() {
        callback(value)
    }
    setTimeout(loadComplete, 100)
}

function promiseToGiveItBackLater(value) {
    return new promise ((resolve, reject) => {

        function loadComplete() {
            resolve(value);
        }
        setTimeout(() => {
            resolve(value)
        }, 300)
    }) 
}

function addSomePromises(somePromise) {
    // .then() 
    // .catch()
}
//

module.exports = {giveItBackLater, promiseToGiveItBackLater, addSomePromises} 
