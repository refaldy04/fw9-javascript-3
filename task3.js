const bangun = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let wakeup = false;

      if (wakeup) {
        resolve(wakeup);
      } else {
        reject(new Error('Belum Jam Bangun'));
      }
    }, time);
  });
};

bangun(1000)
  .then((result) => console.log('Ayo bangun'))
  .catch((err) => console.log(err.message));

// *************************************************************

const transactionStatus = (seconds) =>
  new Promise((resolve, reject) => {
    if (seconds > 25) {
      reject(new Error('Request timed out'));
    }
    setTimeout(() => {
      resolve('Your transaction is successful');
    }, seconds * 1000);
  });

transactionStatus(3)
  .then((result) => console.log(result))
  .catch((error) => {
    console.log(error.message);
  });
