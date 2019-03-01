import createCanvas from '/js/canvas.js';
import {prop_access} from '/js/fonctionCours.js';
//import {loadJSON, loadPieceShape} from '/js/loader.js';
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
		this.canvas = prop_access(this.screen, 'area');
		this.context = this.screen.context;
	}

	load()
	{
		this.chargeView();
	    const pos = new Pos(0, 0);
	    const user = new Entity(pos,0 , 0, localStorage.getItem("name"));
	    const scroll = new Scroll(0, 1000, 0,this.context, this.canvas, user);
	    user.playerReset();
	    user.movePiece();
	    user.updateScore();
	    user.setNamePlayer();
	    document.getElementById("homeindex").style.display = "block";
	    scroll.start();
	}

}
