//=========Mock API start==========//
function getRandomBool(n) {
  var maxRandomCoeff = 1000;
  if (n > maxRandomCoeff) n = maxRandomCoeff;
  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

//api to fetch a single article
function getArticle(articleId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomBool(10)) {
        reject(`Failed article ${articleId}`);
      } else {
        resolve(`Resolved article ${articleId}`);
      }
    }, Math.random() * 1000);
  });
}

function getArticleIds(page) {
  let ids = [];
  if (page === null || page === undefined) {
    page = 0;
  }
  const pageSize = 10;
  for (let i = 0; i < pageSize; i++) {
    ids.push(page * pageSize + i);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (getRandomBool(10)) {
        reject("Failed");
      } else resolve(ids);
    }, Math.random() * 1000);
  });
}
//============Mock API end=========//

function fetchSingleArticle(articleId, limit) {
  return getArticle(articleId).then(
    (res) => {
      return res;
    },
    (error) => {
      if (limit > 0) {
        return fetchSingleArticle(articleId, limit--);
      }
      return "Failed";
    }
  );
}

function getAllArticleIds() {
	getArticleIds(0)
    .then((articleIds) => {
      let articlePromises = [];
      articleIds.forEach((element) => {
        let retryLimit = 3;
        articlePromises.push(fetchSingleArticle(element, retryLimit));
        renderArticles(articlePromises);
      });
    })
    .catch(() => {
      document.getElementById("app").innerHTML = "Please try again";
    });
}

function renderArticles(articles) {
  Promise.all(articles).then((val) => {
    console.log(val);
  });
}

getAllArticleIds();