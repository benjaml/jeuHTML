var Scene = function(game)
{
	var self = this;
	this.game = game;
	this.background = new Image();
	this.background.src = "img/battlebacks/001-Grassland01.jpg";
	this.backgroundX = 2000;
	this.backgroundY = 1400;
	this.targetX = this.backgroundX;
	this.targetY = this.backgroundY;
	this.playerList = [
		
	];
	this.playerList[0] = new Knight(this);
	this.playerList[1] = new Ranger(this);
	this.playerList[2] = new Knight(this);
	
	this.enemyList = [
		
	];
	
	this.listCharacter = [];
	
	this.nextEnemyPop = 0;
	
	this.playerList[0].moveTo(2200,1700);
	this.playerList[0].posX = 2200;
	this.playerList[0].posY = 1900;
	this.playerList[1].moveTo(2200,1800);
	this.playerList[1].posX = 2200;
	this.playerList[1].posY = 1900;
	this.playerList[2].moveTo(2200,1900);
	this.playerList[2].posX = 2200;
	this.playerList[2].posY = 1900;


	for(var i=0; i<this.playerList.length; i++)
	{
		this.listCharacter[i] = this.playerList[i];
	}
	this.spawnEnemies();
}



SCENE_CAMERA_SPEED = 0.008;


Scene.prototype.spawnEnemies = function()
{

	for(var i = 0;i < this.game.turn;i++)
	{
		if(this.game.turn >= 1 )
		// on spawn un petit ennemis
		{
			var id2 = this.listCharacter.length;
			this.enemyList[i] = new Enemy(this);
			this.listCharacter[id2] = this.enemyList[i];
			this.enemyList[i].setPosition(2600,1950-i*100);
			this.enemyList[i].listIndex = i;
		}
		
	}

	console.log(this.listCharacter);
	this.sortCharact();
};


Scene.prototype.update = function(timeData)
{

	for(var i=0; i<this.playerList.length; i++)
	{
		this.playerList[i].update(timeData);
	}
	
	for(var i=0; i<this.enemyList.length; i++)
	{
		this.enemyList[i].update(timeData);
	}
}

Scene.prototype.sortCharact = function()
{
	this.listCharacter.sort(function(a,b){
		return a.y - b.y;
	});
}


Scene.prototype.draw = function(g)
{	
	g.save();
	
		g.translate(-this.backgroundX, -this.backgroundY);
		
		g.drawImage(this.background, 0, 0);
		
		for(var i=0; i<this.listCharacter.length; i++)
		{
			if(this.listCharacter[i].health > 0)
			{
				this.listCharacter[i].draw(g);
				this.listCharacter[i].characterIndex = i;
			}
			
			
		}
		
	g.restore();
}