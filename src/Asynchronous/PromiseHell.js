/*
    Promise implementation
    Promise Hell
*/
// Promise implementation
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = true;
//     if (result) resolve("Subscribe to My channel");
//     else reject(new Error("Why haven't you subscribed yet?"));
//   }, 1000);
// });

// sub
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => console.log(err));

// ************* Promise Hell start *************

function likeMyChannel(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe my channel - ${username}`);
    }, 1000);
  });
}

function shareMyVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share my video - ${video}`);
    }, 1000);
  });
}

function likeMyVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like my video - ${video}`);
    }, 1000);
  });
}

likeMyChannel("Ashutosh Jha")
  .then((msg) => {
    console.log(msg);
    shareMyVideo("JS questions").then((msg) => {
      console.log(msg);
      likeMyVideo("JS questions").then((msg) => {
        console.log(msg);
      });
    });
  })
  .catch((err) => console.log(err));

// ************* Promise Hell end *************
