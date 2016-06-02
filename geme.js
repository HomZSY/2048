var game = {
	data: [], //存游戏方格内的所有数字
	score: 0,
	start: function(){
		this.data = [
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
		],
		this.randomNum();
		this.randomNum();
	},
	isFull: function(){ //false则未满
		for(var i = 0; i <= 3; i++){
			for(var j = 0; j <=3 ; j++){
				if(this.data[i][j] == 0){
					return false;
				}
			}
		}
		return true;
	} 
	randomNum: function(){
		if(this.isFull()){ //若满了则游戏结束了
			return;
		}
		while(true){
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
}

var action = {

}