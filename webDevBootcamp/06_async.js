//Async Keyword
/* async function hello() {
} 

const sing = async () => {
    throw 'UH OH, PROBLEM!'
    return 'LA LA LA LA'
}

sing.then((data) => {
    console.log('PROMISE RESOLVED WITH', data)
})
    .catch(err => {
        console.log('OH NO, PROMISE REJECTED!')
        console.log(err)
    })*/

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('sdaagha', 'corgifeetarecute')
    .then(msg => {
        console.log('LOGGED IN!')
        console.log(msg)
    })
    .catch(err => {
        console.log('ERROR!')
        console.log(err)
    })


// The Await Keyword
/* OLD METHOD
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay)
    })
}
delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000)) */

/*  NEW METHOD
async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}
// rainbow().then(() => console.log('End of rainobw!')

async function printRainbow() {
    await rainbow();
    console.log('END OF RAINBOW!')
}

printRainbow() */

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


/* async function makeTwoRequests() {
    let data1 = await fakeRequest('page1');
    console.log(data1);
} */


//Handling Errors is Async Functions
async function makeTwoRequests() {
    let data1 = await fakeRequest('page1');
    console.log(data1);
}
try {
    let data1 = await fakeRequest('/page1');
    let data2 = await fakeRequest('/page2');
    console.log('data1')
} catch (e) {
    console.log("CAUGHT AN ERROR!!!")
    console.log("Error is:", e)
}
