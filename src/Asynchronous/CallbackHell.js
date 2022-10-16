/*
    Callback hell
*/

console.log("Start");
function likeMyChannel(username, cb) {
  setTimeout(() => {
    cb(`Subscribe my channel - ${username}`);
  }, 1000);
}

function shareMyVideo(video, cb) {
  setTimeout(() => {
    cb(`Share my video - ${video}`);
  }, 1000);
}

function likeMyVideo(video, cb) {
  setTimeout(() => {
    cb(`Like my video - ${video}`);
  }, 1000);
}

// Callback hell
const message = likeMyChannel("Ashutosh Jha", (message) => {
  console.log(message);
  shareMyVideo("JS interview questions", (action) => {
    console.log(action);
    likeMyVideo("JS interview questions", (action) => {
      console.log(action);
      likeMyVideo("JS interview questions", (action) => {
        console.log(action);
        likeMyVideo("JS interview questions", (action) => {
          console.log(action);
          likeMyVideo("JS interview questions", (action) => {
            console.log(action);
          });
        });
      });
    });
  });
});

console.log("End");
