Meteor.methods({
  GetUrlData:function(data){
  	  this.unblock();
  	  var result = HTTP.call("GET", data.url,{});
  	  console.log(result.statusCode);
  	  return result;
  },
});
