var Player = function(scene,spriteData)
{
	
	if(typeof(scene) == "undefined")
	{
		return;
	}
	var self = this;
	this.attack;
	this.health;
	this.mana;
	this.characterIndex;
	this.posX;
	this.posY;
	this.attaque = "attack";
	this.scene = scene;
	//this.saveManager = SaveManager;
	
	Character.call(this, scene, spriteData);
	this.game = scene.game;
	
	
};

Player.prototype = new Character();
Character.prototype.update = function(timeData)
{
	if(this.moveTime && timeData.local < this.moveTime + this.moveDuration){
		var f = (timeData.local - this.moveTime)/this.moveDuration;
		
		/* easeIn>1 , 0>easeOut>1 */
		//f = Math.pow(f,0.6);
		
		this.setPosition(
			f * (this.targetX - this.startX) + this.startX,
			f * (this.targetY - this.startY) + this.startY);
			
	}
	else if (this.isMoving)
	{
		this.isMoving = false;
		this.setPosition(this.targetX, this.targetY);
		this.setSprite("idle");
	}
}
Player.prototype.attackEnemy = function()
{
	
	this.applyDamage();
}
Player.prototype.setAttack = function(attackName)
{
	switch(attackName){
		case "attack":
			this.attaque = "attack";
			break;
		
		case "flamethrower":
			if(this.mana < 20){
				this.attaque = "flamethrower";
			}	
			else{
				this.attaque = "attack";
			}
			break;
			
		case "ultralaser":
			if(this.mana < 30){
				this.attaque = "ultralaser";
			}	
			else{
				this.attaque = "attack";
			}
			break;
	}
}
Player.prototype.applyDamage = function()
{
	this.attackDamage;
	this.manaCost;
	this.aoe;
	this.setSprite("attack");
	this.setSprite("idle");
	switch(this.attaque){
		case "attack":
			this.attackDamage = this.attack;
			this.manaCost = 0;
			this.aoe = false;
			break;
		
		case "flamethrower":
			this.attackDamage = 15;
			this.manaCost = 20;
			this.aoe = true;
			break;
			
		case "ultralaser":
			this.attackDamage = 50;
			this.manaCost = 30;
			this.aoe = false;
			break;
	}
	if(!this.aoe){
		var e = this.game.turnList[1];
		
		e.health -= this.attackDamage;
		if(e.health <=0)
		{
			e.setSprite("death");
		
			if(this.game.scene.enemyList.length == 1)
			{
				this.game.scene.enemyList = [];
			}
			else
			{
				this.game.scene.enemyList.splice(e.listIndex,1);
				this.game.turnList.splice(this.game.indexTurn+1,1);
			}
			
			
		}
		else
		{
			e.setSprite("damage");
			e.setSprite("idle");
			this.game.indexTurn++;
		}
	}
	else{
		for(var i = 1;i<this.game.turnList.length;i++){
			var e = this.game.turnList[i];
			e.health -= this.attackDamage;
			if(e.health <=0)
			{
				e.setSprite("death");
				if(this.game.scene.enemyList.length == 1)
				{
					this.game.scene.enemyList = [];
				}
				else
				{
					this.game.scene.enemyList.splice(e.listIndex,1);
					this.game.turnList.splice(this.game.indexTurn+1,1);
				}
				
				
			}
			else
			{
				e.setSprite("damage");
				e.setSprite("idle");
				this.game.indexTurn++;
			}
		}
	}	
	this.mana = this.mana - this.manaCost;
	
}
Player.ATTACK = 25;
Player.HEALTH = 100;
Player.MANA = 100;




