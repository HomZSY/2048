var gameOver = document.getElementById('gameOver');
var game = {
	state: 1,
	gameOver: 0, 
	RUNNING: 1, //出现新的方格之后的现状
	PLAYING: 2, //移动状态
	data: [], //存游戏方格内的所有数字
	score: 0,
	start: function(){
		gameOver.style.display = "none";
		this.data = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
		];
		this.randomNum();
		this.randomNum();
		this.state = this.RUNNING;
		this.score = 0;
		this.updateView();
	},
	/* 看方格是否满 */
	isFull: function(){ //0则未满
		for(var i = 0; i <= 3; i++){
			for(var j = 0; j <=3 ; j++){
				if(this.data[i][j] == 0){
					return 0;
				}
			}
		}
		return 1;
	},
	/* 产生随机方格 */
	randomNum: function(){
		if(this.isFull()){ //若满了则游戏结束了
			return;
		}
		while(1){
			/* 随机生成一个单元格的横坐标和纵坐标 */
			var x = Math.floor(Math.random()*4); 
			var y = Math.floor(Math.random()*4);
			if(this.data[x][y] == 0){
				this.data[x][y] = Math.floor(Math.random()*2+1)*2; //只会生成2或4
				// 看到另一种写法 = Math.random()<0.5?2:4;
				break;
			}
		}
	},
	/* 更新游戏的界面 */
	updateView: function(){
		/* 修改方格内的东西 */
		for(var x = 0; x <= 3; x++){
			for(var y = 0; y<=3; y++){
				// 寻找在游戏界面上的方格
				var cell = document.getElementById("c"+x+y);
				cell.innerHTML = this.data[x][y] == 0 ? "" : this.data[x][y];
				cell.className = this.data[x][y] == 0 ? "cell" : "cell"+" c"+this.data[x][y];
			}
		}
		/* 修改分数 */
		var score = document.getElementById('score');
		score.innerHTML = "Score : " + this.score;
		/* 如果游戏结束，则要显示gameOver页面 */
		if(this.isGameOver()){
			this.state = this.gameOver;
			gameOver.style.display = "block";
			var LastScore = document.getElementById('LastScore');
			LastScore.innerHTML = this.score;
		}
	},
	/* 是否游戏结束 */
	isGameOver: function(){  //1则游戏结束
		if(!this.isFull()){
			return 0;
		}
		for(var x = 0; x<=3; x++){
			for(var y = 0; y<=3; y++){
				/* 判断与右边是否一样 */
				if(x!=3){
					if(this.data[x][y] == this.data[x+1][y]){
						return 0;
					}	
				}
				/* 判断与下边是否一样 */
				if(y!=3){
					if(this.data[x][y] == this.data[x][y+1]){
						return 0;
					}
				}
			}
		}
		return 1;
	},
	/* 是否能左移 */
	canLeft: function(){ //1则可以左移
		/* 如果有值的左边有一个是空的或者左边的值跟他一样就可以左移 */
		for(var x = 0; x<=3; x++){ 
			for(var y = 1; y<=3; y++){
				if(this.data[x][y] != 0){
					if(this.data[x][y-1] == 0 || this.data[x][y] == this.data[x][y-1]){
						//左边相邻的一个为空或值相同时可以,因为是左到右遍历的，所以这样既可
						return 1;
					}
				}
			}
		}
		return 0;
	},
	/* 向左移动 */
	moveLeft: function(){
		if(canLeft){


			this.randomNum();
		}
	},
	/* 是否能右移 */
	canRight: function(){ //1则可以右移
		/* 如果有值的右边有一个是空的或者右边的值跟他一样就可以右移 */
		for(var x = 0; x<=3; x++){ 
			for(var y = 2; y>=0; y--){
				if(this.data[x][y] != 0){
					if(this.data[x][y+1] == 0 || this.data[x][y] == this.data[x][y+1]){
						return 1;
					}
				}
		
	/* 是否能上移 */
	canUp: function(){ //1则可以上移
		/* 如果有值的上边有一个是空的或者上边的值跟他一样就可以上移 */
		for(var y = 0; y<=3; y++){ 
			for(var x = 1; x<=3; x++){
				if(this.data[x][y] != 0){
					if(this.data[x-1][y] == 0 || this.data[x][y] == this.data[x-1][y]){
						return 1;
					}
				}
			}
		}
		return 0;
	},
	/* 向左移动 */
	moveUp: function(){
		if(canUp){

		}
	},
	/* 是否能下移 */
	canDown: function(){ //1则可以下移
		/* 如果有值的下边有一个是空的或者下边的值跟他一样就可以下移 */
		for(var y = 0; y<=3; y++){ 
			for(var x = 2; x>=0; x--){
				if(this.data[x][y] != 0){
					if(this.data[x+1][y] == 0 || this.data[x][y] == this.data[x+1][y]){
						return 1;
					}
				}
			}
		}
		return 0;
	},
	/* 向下移动 */
	moveDown: function(){
		if(canDown){
			
		}
	},	

}
window.onload = function(){
	game.start();
}
var action = {

}