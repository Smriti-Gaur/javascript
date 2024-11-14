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