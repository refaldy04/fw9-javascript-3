const getmonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['Janiary', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
  }, 4000);
};

let display = function (a, b) {
  try {
    b.map((el) => console.log(el));
  } catch {
    console.log(a.message);
  }
};

getmonth(display);

// display(null, ['sdfsdf', 'afadf', 'adfad']);

// console.log(true == null);

// getmonth();

// let month = [1, 1, 1, 2, 4, 6, 8, 9];

// month.map(function (month) {
//   console.log(month);
// });
