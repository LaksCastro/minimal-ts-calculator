const gh = require("gh-pages");

gh.publish("/dist", (err) => {
  if (err) {
    console.log("An error ocurred:");
    throw err;
  }
  console.log("Success Publish!");
});
