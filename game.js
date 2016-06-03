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
		score.innerHTML = "Score : "+this.score;
	}
}
window.onload = function(){
	game.start();
}
var action = {

}