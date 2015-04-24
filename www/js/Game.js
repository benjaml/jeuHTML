var Game = function()
{
	var self = this;

	//this.main = main;
	
	this.canvas = document.getElementById('game');
	this.graphics = this.canvas.getContext('2d');
	
	this.canvas.width = Game.WIDTH;
	this.canvas.height = Game.HEIGHT;
	
	this.turn = 1;
	
	this.timeData = {
		global:Date.now(),
		globalDelta:0,
		local:0,
		localDelta:0
	};
	
	this.graphics.width = this.canvas.width;
	this.graphics.height = this.canvas.height;
	this.graphics.timeData = this.timeData;
	
	this.scene = new Scene(this);
	window.addEventListener('resize',function(){
		self.handleResize();
	});
	requestAnimationFrame(function loop(){
		self.mainLoop();
		requestAnimationFrame(loop);
	});
	this.turnList =[];
	this.makeTurnList();
	this.indexTurn = 0;
	this.handleResize();
};

Game.WIDTH = 800;
Game.HEIGHT = 600;


Game.prototype.handleResize = function(){
	this.canvas.width = document.body.clientWidth;
	this.canvas.height = document.body.clientHeight;
	this.graphics.width = this.canvas.width;
	this.graphics.height = this.canvas.height;
	this.scale = this.canvas.height/Game.HEIGHT; 
}
Game.prototype.makeTurnList = function()
{
	this.scene.listCharacter = [];
	for(var i=0; i<this.scene.playerList.length; i++)
	{
		this.scene.listCharacter[i] = this.scene.playerList[i];
	}
	this.scene.spawnEnemies();
	this.turnList[0] = this.scene.playerList[0];
	for(var i = 0;i< this.scene.enemyList.length ; i++)
	{
		this.turnList[i+1] = this.scene.enemyList[i];
	}
}

Game.prototype.mainLoop = function()
{
	if(this.indexTurn ==this.turnList.length)
	{
		this.indexTurn = 0;
	}
	if(this.scene.enemyList.length == 0 )
	{
		this.turn ++;
		this.makeTurnList();
	}
	if(this.scene.playerList[0].health <= 0){
		this.scene.playerList[0]  = new Knight(this.scene);
		this.turn = 1;
		this.scene.playerList[0].moveTo(2200,1900);
		this.makeTurnList();
	}
	if(this.indexTurn == 0){
		console.log("c'est le tour du player");
	}
	else{
		console.log("c'est le tour de l'enemie "+this.indexTurn);
		this.turnList[this.indexTurn].attackPlayer(this.scene.playerList[0]);
	}
	
	
	
	var now = Date.now();
	this.timeData.globalDelta = now - this.timeData.global;
	this.timeData.global = now;
	
	this.timeData.localDelta = Math.min(50,this.timeData.globalDelta);
	this.timeData.local += this.timeData.localDelta;
	
	this.update(this.timeData);
	this.draw(this.graphics);
}

Game.prototype.update = function(timeData)
{
	this.scene.update(timeData);
};

Game.prototype.draw = function(g)
{
	g.clearRect(0, 0, g.width, g.height);
	g.fillStyle = "red";
	g.fillRect(0, 0, g.width, g.height);
	
	g.save();
		g.scale(this.scale,this.scale);
		
		this.scene.draw(g);
		

	g.restore();
};