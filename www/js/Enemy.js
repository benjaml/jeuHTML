var Enemy = function(scene)
{
	
	this.attack = Enemy.ATTACK;
	this.health = Enemy.HEALTH;
	this.listIndex;
	this.characterIndex;
	Character.call(this, scene, {
		idle: {
			img : "img/sprite/idle-1.png",
			rowCount : 1,
			colCount : 16,
			loop : true
		},
		attack: {
			img : "img/sprite/attack-1.png",
			rowCount : 1,
			colCount : 12,
			loop : false
		},
		damage: {
			img : "img/sprite/damage-1.png",
			rowCount : 1,
			colCount : 15,
			loop : false
		},
		death: {
			img : "img/sprite/death-1.png",
			rowCount : 1,
			colCount : 15,
			loop : false
		}
	});
};
Enemy.COST = 1;
Enemy.ATTACK = 5;
Enemy.HEALTH = 50;
Enemy.MaxPopDelay = 5000;
Enemy.MinPopDelay = 500;
Enemy.MaxEnemyY = 1996;
Enemy.MinEnemyY = 1571;
Enemy.MaxEnemyX = 3500;
Enemy.MinEnemyX = 2500;
Enemy.prototype = new Character();
Enemy.prototype.attackPlayer = function(p)
{
	this.setSprite("attack");
	this.setSprite("idle");
	p.health -= this.attack;
	this.game.indexTurn++;
}