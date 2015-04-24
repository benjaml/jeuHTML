var Knight = function(scene)
{
	var self = this;
	this.attack = Knight.ATTACK;
	this.health = Knight.HEALTH;
	this.mana = Knight.MANA;
	this.characterIndex;
	this.posX;
	this.posY;
	this.attaque = "attack";
	console.log("new knight");
	//this.saveManager = SaveManager;
	Player.call(this, scene, {
		idle: {
			img : "img/sprite/idle-1-2-1.png",
			rowCount : 2,
			colCount : 16,
			loop : true
		},
		move: {
			img : "img/sprite/move-1-2-1.png",
			rowCount : 1,
			colCount : 7,
			loop : true
		},
		attack: {
			img : "img/sprite/attack-1-2-1.png",
			rowCount : 1,
			colCount : 16,
			loop : false
		}
	});
	this.game = this.scene.game;
	
	
};

Knight.prototype = new Player();

Knight.ATTACK = 15;
Knight.HEALTH = 200;
Knight.MANA = 100;




