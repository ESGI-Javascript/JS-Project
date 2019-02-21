import Router from '/js/Router.js';
import GameLoader from '/js/GameLoader.js';
import Home from '/js/Home.js';
function loadview()
{
    const gameLoader = new GameLoader();
    const id = 'view';
    const router = new Router();
    const home = new Home();
    router.addroute("/", '/home', id, home);
    router.addroute("game", '/gameView', id, gameLoader);
    //router.addroute("score", '/score', id);
    window.addEventListener('hashchange', router.router());
    window.addEventListener('load', router.router());

}

loadview();


