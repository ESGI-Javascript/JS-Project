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
    /*-return new Promise((resolve, reject) => { resolve(this.ajaxCall(this.routes[pathName].path,this.routes[pathName].idview)) })
    .finally(this.loader(pathName));*/



      var promise = this.ajaxCall(this.routes[pathName].path,this.routes[pathName].idview);
      promise.then(() => this.loader(pathName));   
     
	}

  router()
  {
    var url = location.hash.slice(1) || '/';
    this.navigate(url);
  }

  ajaxCall(Url,idview)
  { 
    return new Promise((resolve, reject) => { 
        let xmlhttp = new XMLHttpRequest();
      
       xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == XMLHttpRequest.DONE) {   
             if (xmlhttp.status == 200) {
                 resolve(document.getElementById(idview).innerHTML = xmlhttp.responseText);
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
    })
    
  }
  loader(id)
  {
    this.routes[id].controller.load();
  }
}