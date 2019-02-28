import {type_check_v2} from '/js/fonctionCours.js';

export default class Pos{
	constructor(x, y)
	{
		this.x = this.controleNumber(x);
		this.y = this.controleNumber(y);
	}

	setPos(x, y)
	{
		this.x = x;
		this.y = y;
	}

	increlementY()
	{
		this.y++;
	}

	controleNumber(value)
	{
		if(type_check_v2(value, {'type':'number'}))
		{
			return value;
		}
		return 0;
	}
}