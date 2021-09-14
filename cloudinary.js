var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: "dt4xntymn", // add your cloud_name
  api_key: "879229719542176", // add your api_key
  api_secret: "6KNCQb_nzfWSp_1jzcrVHNNpMHM", // add your api_secret
  secure: true
});

cloudinary.v2.search.expression(
  'folder:discoverCarousel/*' // add your folder
).sort_by('public_id', 'desc').max_results(30).execute().then((result) => {
 
  const urls = result.resources.map((item) => {
    return item.url
  })
  console.log(urls)

});