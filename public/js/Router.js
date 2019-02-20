export default class Router{
	constructor()
	{
  		this.routes = {};
	}

	addroute(pathName, path, idview, controller) {
      this.routes[pathName] = {path: path, idview :idview, controller : controller };
  }

  remove(name) {
      delete this.routes[name];
  }


	navigate(pathName)
	{
    return new Promise((resolve, reject) => { resolve(this.ajaxCall(this.routes[pathName].path,this.routes[pathName].idview)) })
    .then(this.loader(pathName));


/*

      var promise = this.ajaxCall(this.routes[pathName].path,this.routes[pathName].idview);
      promise.then(function(response) {
      alert(response);
  }).finally(function(response) {
      alert(response);
  })
;*/
     
	}

  router()
  {
    var url = location.hash.slice(1) || '/';
    this.navigate(url);
  }

  ajaxCall(Url,idview)
  { 
     let xmlhttp = new XMLHttpRequest();
      
       xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {   
             if (xmlhttp.status == 200) {
                 document.getElementById(idview).innerHTML = xmlhttp.responseText;
             }
             else if (xmlhttp.status == 400) {
                alert('There was an error 400');
             }
             else {
                 alert('something else other than 200 was returned');
             }
          }
      };

      xmlhttp.open("GET", Url, true);
      xmlhttp.send()
    
  }
  loader(id)
  {
    console.log(this.routes[id].controller.load())
    this.routes[id].controller.load();
  }
}