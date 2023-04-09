// ************* Promise Chaining Start *************
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

likeMyChannel("Mr. Ashutosh")
  .then((msg) => {
    console.log(msg);
    return shareMyVideo("JS Basics");
  })
  .then((msg) => {
    console.log(msg);
    return likeMyVideo("JS Basics");
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => console.log(err));
