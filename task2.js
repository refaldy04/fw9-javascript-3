const getmonth = (callback) => {
  setTimeout(() => {
    let error = true;
    let month = ['Janiary', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember'];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found'), []);
    }
  }, 4000);
};

getmonth((err, data) => {
  try {
    console.log(data);
  } catch (e) {
    console.log(err);
  }
});
