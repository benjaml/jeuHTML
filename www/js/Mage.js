 var Mage = function(scene)
{
	var self = this;
	this.attack = Mage.ATTACK;
	this.health = Mage.HEALTH;
	this.mana = Mage.MANA;
	this.characterIndex;
	this.posX;
	this.posY;
	this.attaque = "attack";
	console.log("new knight");
	//this.saveManager = SaveManager;
	Player.call(this, scene, {
		idle: {
			img : "img/sprite/idle-2-2-1.png",
			rowCount : 2,
			colCount : 16,
			loop : true
		},
		move: {
			img : "img/sprite/move-2-2-1.png",
			rowCount : 1,
			colCount : 7,
			loop : true
		},
		attack: {
			img : "img/sprite/attack-2-2-1.png",
			rowCount : 1,
			colCount : 16,
			loop : false
		}
	});
	this.game = this.scene.game;
	
	
};

Mage.prototype = new Player();

Mage.ATTACK = 15;
Mage.HEALTH = 75;
Mage.MANA = 200;




