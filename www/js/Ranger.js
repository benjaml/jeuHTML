 var Ranger = function(scene)
{
	var self = this;
	this.attack = Ranger.ATTACK;
	this.health = Ranger.HEALTH;
	this.mana = Ranger.MANA;
	this.characterIndex;
	this.posX;
	this.posY;
	this.attaque = "attack";
	//this.saveManager = SaveManager;
	Player.call(this, scene, {
		idle: {
			img : "img/sprite/idle-2-2-1.png",
			rowCount : 2,
			colCount : 16,
			loop : true
		}
	});
	this.game = this.scene.game;
	
	
};

Ranger.prototype = new Player();

Ranger.ATTACK = 25;
Ranger.HEALTH = 100;
Ranger.MANA = 100;





