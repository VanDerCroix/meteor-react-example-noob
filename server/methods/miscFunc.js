Meteor.methods({
  GetUrlData:function(data){
  	  this.unblock();
  	  var result = HTTP.call("GET", data.url,{});
  	  console.log(result.statusCode);
  	  return result;
  },
});

// renderJData() {
//   var url = 'http://pokeapi.co/api/v2/pokemon/1/';
//   var result = {};
//
//   Meteor.call('GetUrlData',
//   {
//     url: url
//   }, (err, res) => {
//     if(res.statusCode=='200'){
//       alert('json rec. ok');
//       this.result = res;
//     }
//   });
//   console.log(result);
//
//   return (
//     <div>
//       <h1>json data: TODO: add json data retrieved and place them correctly</h1>
//       <span>{result.data}</span>
//     </div>
//   );
// }
