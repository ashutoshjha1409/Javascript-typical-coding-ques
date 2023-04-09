/* 
    Async/Await
*/

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

const result = async () => {
  try {
    const msg1 = await likeMyChannel("Mr. Ashutosh");
    const msg2 = await shareMyVideo("JS Basics");
    const msg3 = await likeMyVideo("JS Basics");
    console.log({ msg1, msg2, msg3 });
  } catch (err) {
    console.log(err);
  }
};

result();
