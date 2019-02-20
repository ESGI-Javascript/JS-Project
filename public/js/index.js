import Router from '/js/Router.js';
import GameLoader from '/js/GameLoader.js';

function loadview()
{
    const gameLoader = new GameLoader();
    const id = 'view';
    const router = new Router();
    //router.addroute("", '/home', id);
    router.addroute("game", '/gameView', id, gameLoader);
    //router.addroute("score", '/score', id);
    window.addEventListener('hashchange', router.router());
    window.addEventListener('load', router.router());

}

loadview();


