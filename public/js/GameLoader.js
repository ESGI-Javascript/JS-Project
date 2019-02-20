import createCanvas from '/js/canvas.js';
import {type_check_v1, type_check_v2, prop_access} from '/js/fonctionCours.js';
import {loadJSON, loadPieceShape} from '/js/loader.js';
import Pos from '/js/Pos.js';
import Scroll from '/js/Scroll.js';
import Entity from '/js/Entity.js';

export default class GameLoader
{
	
	constructor()
	{
  		this.screen = null;
		this.canvas = null;
		this.context = null;
	}

	chargeView()
	{
		this.screen = new createCanvas(document.getElementById('tetris'));
		this.canvas = prop_access(screen, 'area');
		this.context = screen.context;
	}

	load()
	{
		this.chargeView();
	    const pos = new Pos(0, 0);
	    const user = new Entity(pos,0 , 0);
	    const scroll = new Scroll(0, 1000, 0,this.context, this.canvas, user);
	    user.playerReset();
	    user.updateScore();
	    scroll.start();
	}
}



