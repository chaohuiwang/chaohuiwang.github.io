   var toTop = 1, toBottom = 2, toLeft = 3, toRight = 4, toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8;//方向
   //传入dot的相对于窗口的百分比返回计算过后的位置数组
   function returnOpsitionArr(obj){
   	   var arr = [];
	   for(var i=0; i<obj.length; i++){
	   	  var o = new Object();
	   	  o.x = obj[i].l * clientW;
	   	  o.y = obj[i].t * clientH;
	   	  arr.push(o);
	   }
	   return arr;
   }
   function DrawLine(startX,startY,speed){
      this.slope = 0;//斜率
      this.lineFx = 0;//方向
      this.offsetX = 0;//X偏移量
      this.offsetY = 0;//Y偏移量
   	  this.lineIndex = 0;
   	  this.startX = startX;//起始坐标
   	  this.startY = startY;
   	  this.speed = speed;//画线速度
   	  this.isTrueNum = -1;
   }
   DrawLine.prototype.lineToFn = function(cvs,turnPositionArr){
        if(turnPositionArr[this.lineIndex].y == this.startY){//水平方向
  	  		if(turnPositionArr[this.lineIndex].x > this.startX){
  	  			this.lineFx = toRight;
  	  		}else{
  	  			this.lineFx = toLeft;
  	  		}
  	  	}else if(turnPositionArr[this.lineIndex].x == this.startX){//垂直方向
  	  		if(turnPositionArr[this.lineIndex].y > this.startY){
  	  			this.lineFx = toBottom;
  	  		}else{
  	  			this.lineFx = toTop;
  	  		}
  	  	}else{//斜线
  	  		this.slope = (turnPositionArr[this.lineIndex].y - this.startY)/(turnPositionArr[this.lineIndex].x - this.startX);
  	  		if(this.slope > 0){
  	  			if(turnPositionArr[this.lineIndex].y > this.startY && turnPositionArr[this.lineIndex].x > this.startX){
  	  				this.lineFx = toRightBottom;
  	  			}else if(turnPositionArr[this.lineIndex].y < this.startY && turnPositionArr[this.lineIndex].x < this.startX){
  	  				this.lineFx = toLeftTop;
  	  			}
  	  		}else{
  	  			if(turnPositionArr[this.lineIndex].y > this.startY && turnPositionArr[this.lineIndex].x < this.startX){
  	  				this.lineFx = toLeftBttom;
  	  			}else if(turnPositionArr[this.lineIndex].y < this.startY && turnPositionArr[this.lineIndex].x > this.startX){
  	  				this.lineFx = toRightTop;
  	  			}
  	  		}
  	  	}
  	  cvs.moveTo(this.startX,this.startY);
  	  this.offsetX = this.startX;
  	  this.offsetY = this.startY;
  	  var b = this.offsetY - this.slope * this.offsetX;
  	  var _this = this;
  	  this.lineTimer = setInterval(function(){
  	     cvs.beginPath();
   	     cvs.strokeStyle = 'white';
   	     cvs.lineWidth = 1;
   	     cvs.moveTo(_this.startX,_this.startY);
		 switch(_this.lineFx){
		  	case 1:{
		  		_this.offsetY -= _this.speed;
		  		if(_this.offsetY <= turnPositionArr[_this.lineIndex].y){
		  			_this.offsetY = turnPositionArr[_this.lineIndex].y;
		  		}
		  		cvs.lineTo(turnPositionArr[_this.lineIndex].x,_this.offsetY);
		  		cvs.stroke();//描边
                 _this.startX = turnPositionArr[_this.lineIndex].x;
                 _this.startY = _this.offsetY;
		  		if(_this.offsetY <= turnPositionArr[_this.lineIndex].y){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  		break;
		  	}
		  	case 2:{
		  	    _this.offsetY += _this.speed;
		  	    if(_this.offsetY >= turnPositionArr[_this.lineIndex].y){
		  	    	   _this.offsetY = turnPositionArr[_this.lineIndex].y;
		  	    }
		  		cvs.lineTo(turnPositionArr[_this.lineIndex].x,_this.offsetY);
		  		cvs.stroke();//描边
                 _this.startX = turnPositionArr[_this.lineIndex].x;
                 _this.startY = _this.offsetY;
		  		if(_this.offsetY >= turnPositionArr[_this.lineIndex].y){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 4:{
		  	    _this.offsetX += _this.speed;
		  	    if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  	    	   _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  		cvs.lineTo(_this.offsetX,turnPositionArr[_this.lineIndex].y);
		  		cvs.stroke();//描边
                 _this.startX = _this.offsetX;
                 _this.startY = turnPositionArr[_this.lineIndex].y;
		  		if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 3:{
		  	    _this.offsetX -= _this.speed;
		  	    if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  	    	    _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  		cvs.lineTo(_this.offsetX,turnPositionArr[_this.lineIndex].y);
		  		cvs.stroke();//描边
		  		_this.startX = _this.offsetX;
                 _this.startY = turnPositionArr[_this.lineIndex].y;
		  		if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 5:{//线段有斜率
		  	    _this.offsetX -= _this.speed;
		  	    if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  	    	     _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  	    _this.offsetY = _this.offsetX * _this.slope + b;
		  		cvs.lineTo(_this.offsetX,_this.offsetY);
		  		cvs.stroke();//描边
                 _this.startX = _this.offsetX;
                 _this.startY = _this.offsetY;		  		
		  		if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 6:{//线段有斜率
		  	    _this.offsetX -= _this.speed;
		  	    _this.offsetY = _this.offsetX * _this.slope + b;
		  	    if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  	    	    _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  	    if(_this.offsetY >= turnPositionArr[_this.lineIndex].y){
		  	    	   _this.offsetY = turnPositionArr[_this.lineIndex].y;
		  	    }
		  		cvs.lineTo(_this.offsetX,_this.offsetY);
		  		cvs.stroke();//描边
		  	    _this.startX = _this.offsetX;
                 _this.startY = _this.offsetY;	
		  		if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 7:{//线段有斜率
		  	    _this.offsetX += _this.speed;
		  	    _this.offsetY = _this.offsetX * _this.slope + b;
		  	    if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  	    	    _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  	    if(_this.offsetY <= turnPositionArr[_this.lineIndex].y){
		  	    	   _this.offsetY = turnPositionArr[_this.lineIndex].y;
		  	    }
		  		cvs.lineTo(_this.offsetX,_this.offsetY);
		  		cvs.stroke();//描边
		  		_this.startX = _this.offsetX;
                 _this.startY = _this.offsetY;
		  		if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		  	case 8:{//线段有斜率
		  	    _this.offsetX += _this.speed;
		  	    _this.offsetY = _this.offsetX * _this.slope + b;
		  	    if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  	    	    _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  	    if(_this.offsetY >= turnPositionArr[_this.lineIndex].y){
		  	    	   _this.offsetY = turnPositionArr[_this.lineIndex].y;
		 	    }
		  		cvs.lineTo(_this.offsetX,_this.offsetY);
		  		cvs.stroke();//描边
		  		_this.startX = _this.offsetX;
                 _this.startY = _this.offsetY;
		  		if(_this.offsetX >= turnPositionArr[_this.lineIndex].x){
		  			_this.isTrueNum ++;
		  			_this.lineIndex ++;
		  			clearInterval(_this.lineTimer);
		  			_this.startX = turnPositionArr[_this.lineIndex-1].x;
		  			_this.startY = turnPositionArr[_this.lineIndex-1].y
		  			if(_this.lineIndex < turnPositionArr.length) _this.lineToFn(cvs,turnPositionArr);
		  		}
		  	    break;
		  	}
		 }
  	  },30);
   }