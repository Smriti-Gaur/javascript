const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 1");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise 1 consumed");
});

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

const prom3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"smriti",email:"smritii@gmail.com"})
    },1000)
    
    })
prom3.then(function(user){
    console.log(user)
})

const pro4 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let error = true; 
      if (!error) {
        resolve({ username: "doremon", email: "doremon@gmail.com" });
      } else {
        reject("ERROR: something went wrong");
      }
    }, 1000);
  });
  
  pro4.then((user) => {
    console.log(user); 
    console.log(user.username); 
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>console.log("a promise is either resolved or rejected"))

  const pro5 = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true; 
        if (!error) {
          resolve({ username: "java", email: "sinchan@gmail.com" });
        } else {
          reject("ERROR: java went wrong");
        }
      }, 1000);
  });

  async function consumepromisefive (){
    try{
      const response = await pro5;
      console.log(response);
    }
    catch{
      console.log("Error");
    }
  }

  consumepromisefive ()

