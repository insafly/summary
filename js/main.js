// jQuery(function() {
//     console.log(11)
    
//     jQuery('.tratata').each(function(){
//         var btn = jQuery(this);
//         var writeConsole = function(msg, e) {
//             e.preventDefault();
//             console.log(msg)
//         }

//         btn
//             .on('mouseenter', writeConsole.bind(null, 'enter'))
//             .on('mouseleave', writeConsole.bind(null, 'leave'));

//         btn[0].addEventListener('click', writeConsole.bind(null, 'tratata'))
//     })
// });


/* ===== Lesson 01 ===== */

// destructuring

/* const user = ['John', 'Doe'];
const [name, surename] = user;
console.log(name, surename); */

/* const user = {
	name:'John', 
	surename: 'Doe',
	id: 'user-100500',
	gender: 'male'
};
const {name: fName, surename: lName, ...rest} = user;
console.log(rest);
console.log(`Hello, ${fName} ${lName}`); */

// arrow functions

/* const getName = (name, surename) => {
	return `Hello, ${name} ${surename}`;
}
console.log(getName('Kate', 'G')); */

/* const getName = name => ({name: name});
console.log(getName('Kate')); */

/* const name = 'field';
const obj = {
	[name]: 'John'
}
console.log(obj)
 */

// classes

/* class Animal {
	constructor (name) {
        this.name = name;
        // or this.type = 'mammal';
    }
    
    type = 'mammal';

    sayHi() {
        console.log(`Hi, I'm ${this.name}`)
    }
}

const dog = new Animal('Max');

console.log(dog.name);
dog.sayHi(); */

/*class Animal {
	constructor (name) {
		this.name = name;
		// or this.type = 'mammal';
	}
	
	type = 'mammal';

	sayHi() {
		console.log(`Hi, I'm ${this.name}`)
	}
}

class Cat extends Animal {
    constructor (name, surename) {
        // access to parent
        super(name);
        this.surename = surename;
    }

    eat() {
        console.log(`Hi, I'm ${this.name} ${this.surename}`)
    }

    // новое объявление статических методов
    static purr () {
        console.log('Purr')
    }

    get fullName() {
        const {name, surename} = this;
        return `${name} ${surename}`;
    }

    // принимает один параметр
    set newName(fullname) {
        this.name = fullname.split(' ')[0];
        this.surename = fullname.split(' ')[1];
    }
}

const dog = new Animal('Max');
const cat = new Cat('Barsik', 'Lebedev')

console.log(cat.type);
cat.eat();
Cat.purr(); 

// setter / getter
cat.newName = 'Murzik Doe';
console.log(cat.fullName); */

// добавление статического метода
/*function Cat() {}

Cat.prototype.meow = function() {
    console.log('Meow');
}

const cat = new Cat();
cat.meow();*/

// promises

/*function getAllUsers () {
    return new Promise((resolve, reject) => {
        // success
        setTimeout(() => {
            resolve('done');
        }, 2000);
        // error
        setTimeout(() => {
            // !!! при работе с ошибками, делать объект ошибки, чтобы получить больше деталей
            reject(new Error('!! error !!'))
        }, 1000)
    })
}

getAllUsers()
    .then(
        // success
        (message) => {
            console.log(message)
        },
        // error
        (error) => {
            console.error(error)
        }
    );*/

// fetch
/* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log) */

/*function getAllUsers(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(console.log)
}
getAllUsers(1);*/

/*function getAllUsers(id) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => response.json())
		.then((res) => {
            return res
        })
}
Promise.all([
    getAllUsers(1),
    getAllUsers(3),
    getAllUsers(5)
])
    .then((arr) => console.log(arr))
    .catch(console.error);

Promise.race([
    getAllUsers(2),
    getAllUsers(4),
    getAllUsers(6)
])
    .then((arr) => console.log(arr))
    .catch(console.error); */

/* function getUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(res => res)
}
// Promise.all([2, 4, 6].map((id) => getUser(id)))
//     .then((arr) => console.log(arr))
//     .catch(console.error);

Promise.all([2, 4, 6].map(getUser))
    .then((arr) => console.log(arr))
    .catch(console.error);

console.log(Promise.resolve('Test'));
console.log(Promise.reject('Error'));

*/

/*function getUser(id) {
	if (!id) {
		// возвращаем промис, чтобы цепочка не остановилась
		return Promise.reject('id is required!');
	}
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => response.json())
		.then(res => res)
}
// Promise.all([undefined, 4, 6].map(getUser))
// 	.then((arr) => console.log(arr))
//     .catch(console.error);
    
const users = [1, 2, 6].reduce((reducer, id)=> {
    return reducer
        .then(() => getUser(id))
        .then(console.log)
}, Promise.resolve('start')) */



// const runPromises = (amount) => {
//     const base = Array.apply(null, {length: amount}).map((a, b) => (b+1));
//     const interval = 5;
//     let counter = 0;
//     let array = [];

//     function getPost(id) {
//         if (!id) return Promise.reject('id is required');
        
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then((response) => {
//                 return response.json()
//             })
//             // .then(res => res);
//     }

//     while (counter*interval < amount) {
//         array.push(base.slice(counter*interval, (counter*interval + interval)));
//         counter++;
//     }

//     Promise.all(array.map((subArray) => {
//             // return Promise.all(subArray.map(getPost))
//             //     .then(arr => arr);
            
//             return subArray.reduce((reducer, id)=> {
//                 return reducer
//                     .then(() => getPost(id))
//                     // .then(console.log)
//             }, Promise.resolve('start'));
//         }))
//         .then((arr) => console.log(arr))
//         .catch(console.error);
// }

// runPromises(100);

// // Promise.all([

// // ]);
    
    
//     // array.map(getPost))
//     // .then((arr) => console.log(arr))
//     // .catch(console.error);

// // const users = [1,2,3,4, 5].reduce((reducer, id)=> {
// //     return reducer
// //         .then((qwe) => {
// //             console.log('qwe', qwe)
// //             return getPost(id)
// //         })
// //         .then((asd) => {
// //             console.log('asd', asd)
// //         })
// // }, Promise.resolve('start')) ; 


// DZ to send
/*const runFetch = (amount) => {
    const base = Array.apply(null, {length: amount}).map((a, b) => (b+1));
    const interval = 5;
    let counter = 0;
    let array = [];

    function getPost(id) {
        if (!id) return Promise.reject('id is required');
        
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(res => res);
    }

    while (counter*interval < amount) {
        array.push(base.slice(counter*interval, (counter*interval + interval)));
        counter++;
    }

    Promise.all(array.map((item) => {
        let posts = [];
        return item.reduce((reducer, subitem) => {
            return reducer
              .then(() => getPost(subitem))
              .then((res) => {
                    posts.push(res);
                    return posts
                })
            }, Promise.resolve(posts));
        }))
        .then((arr) => console.log(arr))
        .catch(console.error);
}

runFetch(100);*/

// async / await
/*function getUser(id) {
	if (!id) {
		return Promise.reject('id is required!');
	}
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => response.json())
		.then(res => res)
}

async function getAllUsers(array) {
    const result = await Promise.all(array.map(getUser));

    console.log(result)
}

getAllUsers([1, 2, 3]);
*/

/*
function mul(a, b) {
	return a * b;
};

// double умножает только на два
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10
*/

/* 
const runFetch = (amount) => {
    let base = Array.apply(null, {length: amount}).map((a, b) => (b+1));
    const interval = 5;
    let counter = 0;
    let array = [];
  
    base.every((a, b) => (b+1))
  
    function getPost(id) {
        if (!id) return Promise.reject('id is required');
        
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(res => res);
    }
  
    while (counter*interval < amount) {
        array.push(base.slice(counter*interval, (counter*interval + interval)));
        counter++;
    }
  
    array.reduce((reducer, item) => {
      return Promise.all(item.map(getPost))
            .then(itemRes => itemRes)
            .then(posts => {
                console.log(posts);
                return posts
            })
            .catch(console.error)
    }, Promise.resolve('start'));
 
}

runFetch(100); */

/* ===== Lesson 02 ===== */