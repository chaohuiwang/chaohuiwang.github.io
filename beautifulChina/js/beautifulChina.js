

$(function(){
   var toTop = 1, toBottom = 2, toLeft = 3, toRight = 4, toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8;//方向
   var pageTwoCanvas = $('#pageTwoCanvas')[0];
   var pageThreeCanvas = $('#pageThreeCanvas')[0];
   var pageFourCanvas = $('#pageFourCanvas')[0];
   var pageFiveCanvas = $('#pageFiveCanvas')[0];
   var pageSixCanvas = $('#pageSixCanvas')[0];
   var pageSevenCanvas = $('#pageSevenCanvas')[0];
   var pageEightCanvas = $('#pageEightCanvas')[0];
   var canvasObj = [pageTwoCanvas,pageThreeCanvas,pageFourCanvas,pageFiveCanvas,pageSixCanvas,pageSevenCanvas,pageEightCanvas];
   var clientW = $('.swiper-slide')[0].clientWidth;
   var clientH = $('.swiper-slide')[0].clientHeight;
   //page7使用参数
   var preH = $('#page_seven_icon').height();
   var imgIndex = 0;
   var preImgIndex = -1;
   //设置canvas尺寸
   for(var i=0; i<$('.swiper-slide canvas').length; i++){
   	   $('.swiper-slide canvas')[i].width = parseFloat(clientW);
   	   $('.swiper-slide canvas')[i].height = parseFloat(clientH);
   } 
   //设置vedio尺寸
   $('#media').width = clientW * 0.978091;
   $('#media').height = clientH * 0.295405;
	//page1界面特效
   function pageOneEffect(){
   	   var silkRoadImg= $('#silkRoadImg');
   	   var pageOneBg = $('#pageOneBg');
   	   silkRoadImg[0].className = '';
   	   pageOneBg[0].className = '';
   	   silkRoadImg.hide();
   	   pageOneBg.hide();
   	   setTimeout(function(){
	   	  silkRoadImg.show();
   	   	  silkRoadImg[0].className = 'fadeIn';
   	   },1000);
   	   setTimeout(function(){
	   	  pageOneBg.show();
   	   	  pageOneBg[0].className = 'fadeIn';
   	   },1500);
   }
   //page2界面特效
   //page2参数
   function pageTwoEffect(){
   	  var rightDotArr1 = [{l: 0.625978, t:0.656455},{l: 0.625978, t:0.049234}];
   	  var rightDotArr2 = [{l: 0.625978, t:0.773026},{l: 0.625978, t:0.71663}];
   	  var leftDotArr = [{l: 0.367762, t:0.103939},{l: 0.367762, t:0.82276},{l: 0.53208, t:0.82276},{l: 0.53208, t:1.1}];
   	  var rightStartX = 0.9624413 * clientW;
   	  var rightStartY = 0.773026 * clientH;
   	  var leftStartX = 0 * clientW;
   	  var leftStartY = 0.00766 * clientH; 
      var cvs = pageTwoCanvas.getContext('2d');
   	  
   	  var lineObj = new DrawLine(rightStartX,rightStartY,6);
   	  var arr = returnOpsitionArr(rightDotArr1);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox')[0]);
   	  
   	  var lineObj2 = new DrawLine(rightStartX,rightStartY,5);
   	  var arr1 = returnOpsitionArr(rightDotArr2);
   	  lineObj2.lineToFn(cvs,arr1);
   	  var arc1 = new DrawArc(5);
   	  arc1.arcToFn(cvs,2,5,arr1,lineObj2,$('#flashBox')[0]);
   	  
   	  var lineObj3 = new DrawLine(leftStartX,leftStartY,10);
   	  var arr2 = returnOpsitionArr(leftDotArr);
   	  lineObj3.lineToFn(cvs,arr2);
   	  var arc2 = new DrawArc(5);
   	  arc2.arcToFn(cvs,2,5,arr2,lineObj3,$('#flashBox')[0]);
   }
   
   //page3特效
   function pageThreeEffect(){
   	  var middleDotArr = [{l: 0.53208, t: 0.032823}];
   	  middleDotStartX = 0.53208 * clientW;
   	  middleDotStartY = 0 * clientH;
   	  var cvs = pageThreeCanvas.getContext('2d');  
   	  var lineObj = new DrawLine(middleDotStartX,middleDotStartY,6);
   	  var arr = returnOpsitionArr(middleDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_three')[0]);
   }
   function pageFourEffect(){
   	  var rightDotArr = [{l: 0.625978, t:0.0514223},{l: 0.625978, t:0.633479}];
   	  var leftDotArr = [{l: 0.367762, t:0.902626},{l: 0.367762, t:0.862144},{l: 0.516432, t:0.862144}];
   	  var bottomDotArr = [{l: 0.516432, t:0.771335},{l: 0.625978, t:0.771335},{l: 0.625978, t:0.7111597}];
      var rightDotStartX = 1 * clientW; 
      var rightDotStartY = 0.1586433 * clientH; 
      var bottomDotStartX = 0.516432 * clientW;
      var bottomDotStartY = 1 * clientH; 
      var leftDotStartX = 0 * clientW; 
      var leftDotStartY = 0.771335 * clientH; 
      
      var cvs = pageFourCanvas.getContext('2d');
   	  
   	  var lineObj = new DrawLine(rightDotStartX,rightDotStartY,8);
   	  var arr = returnOpsitionArr(rightDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_four')[0]);
   	  
   	  var lineObj1 = new DrawLine(leftDotStartX,leftDotStartY,6);
   	  var arr1 = returnOpsitionArr(leftDotArr);
   	  lineObj1.lineToFn(cvs,arr1);
   	  var arc1 = new DrawArc(5);
   	  arc1.arcToFn(cvs,2,5,arr1,lineObj1,$('#flashBox_four')[0]);
   	  
   	  var lineObj2 = new DrawLine(bottomDotStartX,bottomDotStartY,5);
   	  var arr2 = returnOpsitionArr(bottomDotArr);
   	  lineObj2.lineToFn(cvs,arr2);
   	  var arc2 = new DrawArc(5);
   	  arc2.arcToFn(cvs,2,5,arr2,lineObj2,$('#flashBox_four')[0]);
   }
   function pageFiveEffect(){
   	  var middleDotArr = [{l: 0.516432, t: 0.032823}];
   	  middleDotStartX = 0.516432 * clientW;
   	  middleDotStartY = 0 * clientH;
   	  var cvs = pageFiveCanvas.getContext('2d');  
   	  var lineObj = new DrawLine(middleDotStartX,middleDotStartY,6);
   	  var arr = returnOpsitionArr(middleDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_five')[0]);
   }
   function pageSixEffect(){
   	  var rightDotArr = [{l: 0.625978, t:0.0514223},{l: 0.625978, t:0.633479}];
   	  var rightDotArr2 = [{l: 0.68075, t:0.065646},{l: 0.68075, t:0.61269}];
   	  
   	  var leftDotArr = [{l: 0.367762, t:0.23195},{l: 0.367762, t:0.69475}];
   	  var bottomDotArr = [{l: 0.305164, t:0.77352},{l: 0.625978, t:0.77352},{l: 0.625978, t:0.7111597}];
      var rightDotStartX = 1 * clientW; 
      var rightDotStartY = 0.1586433 * clientH;
      
      var bottomDotStartX = 0.305164 * clientW;
      var bottomDotStartY = 1 * clientH; 
      var leftDotStartX = 0 * clientW; 
      var leftDotStartY = 0.098468 * clientH; 
      
      var cvs = pageSixCanvas.getContext('2d');
   	  
   	  var lineObj = new DrawLine(rightDotStartX,rightDotStartY,8);
   	  var arr = returnOpsitionArr(rightDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_six')[0]);
   	  
   	  var lineObj1 = new DrawLine(rightDotStartX,rightDotStartY,8);
   	  var arr1 = returnOpsitionArr(rightDotArr2);
   	  lineObj1.lineToFn(cvs,arr1);
   	  var arc1 = new DrawArc(5);
   	  arc1.arcToFn(cvs,2,5,arr1,lineObj1,$('#flashBox_six')[0]);
   	  
   	  var lineObj2 = new DrawLine(leftDotStartX,leftDotStartY,6);
   	  var arr2 = returnOpsitionArr(leftDotArr);
   	  lineObj2.lineToFn(cvs,arr2);
   	  var arc2 = new DrawArc(5);
   	  arc2.arcToFn(cvs,2,5,arr2,lineObj2,$('#flashBox_six')[0]);
   	  
   	  var lineObj3 = new DrawLine(bottomDotStartX,bottomDotStartY,5);
   	  var arr3 = returnOpsitionArr(bottomDotArr);
   	  lineObj3.lineToFn(cvs,arr3);
   	  var arc3 = new DrawArc(5);
   	  arc3.arcToFn(cvs,2,5,arr3,lineObj3,$('#flashBox_six')[0]);
   }
   function pageSevenEffect(){
   	  var topDotArr = [{l: 0.305164, t:0.054705}];
   	  var topDotStartX = 0.305164 * clientW;
      var topDotStartY = 0 * clientH;       
      var cvs = pageSevenCanvas.getContext('2d');
   	  
   	  var lineObj = new DrawLine(topDotStartX,topDotStartY,8);
   	  var arr = returnOpsitionArr(topDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_seven')[0]);
   }
   function pageEightEffect(){
   	  var rightDotArr = [{l: 0.625978, t:0.645514},{l: 0.625978, t:0.23523}];
   	  var rightDotArr2 = [{l: 0.625978, t:0.71116},{l: 0.625978, t:0.77133},{l: 0.375587, t:0.77133},{l: 0.375587, t:1.2}];
   	  
   	  var leftDotArr = [{l: 0.375587, t:0.13676},{l: 0.375587, t:0.69475}];
      
      var rightDotStartX_1 = 1 * clientW;
      var rightDotStartY_1 = 0.754923 * clientH;
      var rightDotStartX_2 = 1 * clientW;
      var rightDotStartY_2 = 0.82057 * clientH;

      var leftDotStartX = 0 * clientW; 
      var leftDotStartY = 0 * clientH; 
      
      var cvs = pageEightCanvas.getContext('2d');
   	  
   	  var lineObj = new DrawLine(rightDotStartX_1,rightDotStartY_1,8);
   	  var arr = returnOpsitionArr(rightDotArr);
   	  lineObj.lineToFn(cvs,arr);
   	  var arc = new DrawArc(5);
   	  arc.arcToFn(cvs,2,5,arr,lineObj,$('#flashBox_eight')[0]);
   	  
   	  var lineObj1 = new DrawLine(rightDotStartX_2,rightDotStartY_2,8);
   	  var arr1 = returnOpsitionArr(rightDotArr2);
   	  lineObj1.lineToFn(cvs,arr1);
   	  var arc1 = new DrawArc(5);
   	  arc1.arcToFn(cvs,2,5,arr1,lineObj1,$('#flashBox_eight')[0]);
   	  
   	  var lineObj2 = new DrawLine(leftDotStartX,leftDotStartY,8);
   	  var arr2 = returnOpsitionArr(leftDotArr);
   	  lineObj2.lineToFn(cvs,arr2);
   	  var arc2 = new DrawArc(5);
   	  arc2.arcToFn(cvs,2,5,arr2,lineObj2,$('#flashBox_eight')[0]);
   }
   var preIndex = -1;
   var flashBox = $('#page .flashBox');
   var isFirst = true;
   var changeTimer = setInterval(function(){
   	   if(mySwiper.activeIndex != preIndex){
   	   	   preIndex = mySwiper.activeIndex;
   	   	   for(var i=0; i<canvasObj.length; i++){
   	   	   	  var c = canvasObj[i].getContext('2d');
   	   	   	  c.clearRect(0, 0,canvasObj[i].width, canvasObj[i].height);
   	   	   	  flashBox[i].innerHTML = '';
   	   	   }
   	   	   if(!$('#media')[0].ended) $('#media')[0].pause();
   	   	   console.log(mySwiper.activeIndex);
   	   	   if(mySwiper.activeIndex == 1){
   	   	   	  $('#nextIcon')[0].style.display = 'block';
   	   	   	  if(isFirst){
   	   	   	  	pageOneEffect();
   	   	   	    isFirst = false;
   	   	   	  } 
   	   	   }else if(mySwiper.activeIndex == 2){
   	   	   	  $('#nextIcon')[0].style.display = 'none';
   	   	   	  pageTwoEffect();
   	   	   }else if(mySwiper.activeIndex == 3){
   	   	   	  pageThreeEffect();
   	   	   	  var isOnece = true;
   	   	      touch.on($('#bgImgMask')[0], 'touchstart', function(ev){
			    ev.preventDefault();
			    if(isOnece){
				    	$('#bgImgMask').animate({ 
					    width: '100%',
					    height: '84.698%', 
					    top: '5.4705%', 
					    left: '0'
					},500,function(){isOnece = !isOnece;});
			    }else{
			    		$('#bgImgMask').animate({ 
					    width: '84.20704%',
					    height: '75.998%', 
					    top: '13.5705%', 
					    left: '7.7423%'
					},500,function(){isOnece = !isOnece;});
			    }
   	   	    });
   	   	 }else if(mySwiper.activeIndex == 4){
 	   	   	  pageFourEffect();
   	   	 }else if(mySwiper.activeIndex == 5){
   	   	      pageFiveEffect();
   	   	      var isOnece = true;
   	   	      touch.on($('#fiveBgImgMask')[0], 'touchstart', function(ev){
			    ev.preventDefault();
			    if(isOnece){
				    	$('#fiveBgImgMask').animate({ 
					    width: '100%',
					    height: '84.698%', 
					    top: '5.8705%', 
					    left: '0'
					},500,function(){isOnece = !isOnece;});
			    }else{
			    		$('#fiveBgImgMask').animate({ 
					    width: '84.20704%',
					    height: '75.998%', 
					    top: '14.0705%', 
					    left: '7.7423%'
					},500,function(){isOnece = !isOnece;});
			    }
   	   	     });
   	   	 }else if(mySwiper.activeIndex == 6){
 	   	   	  pageSixEffect();
   	   	 }else if(mySwiper.activeIndex == 7){ 
   	   	     pageSevenEffect();
   	   	     touch.on($('#page_seven_firstImg')[0], 'touchstart', function(ev){
			    ev.preventDefault();
			    $('#sevenBgImgMask')[0].style.visibility = 'visible';
			    $('#sevenBgImgMask')[0].style.opacity = '1';			    
			    $('#page_seven .defaultPoster').css({opacity : 0});
   	   	     });
   	   	     touch.on($('#close')[0], 'touchstart', function(ev){
			     ev.preventDefault();
			     //$('#sevenBgImgMask').hide();
			    $('#sevenBgImgMask')[0].style.visibility = 'hidden';
			    $('#sevenBgImgMask')[0].style.opacity = '0';			    
			    $('#page_seven .defaultPoster').css({opacity : 1});
			    for(var j=0; j<$('#sevenBgImgMask .poster').length; j++){
			    	   if($('#sevenBgImgMask .poster')[j].className == 'poster active'){
			    	   	  $('#page_seven .defaultPoster')[2].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }else if($('#sevenBgImgMask .poster')[j].className == 'poster next-active'){
			    	   	  $('#page_seven .defaultPoster')[1].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }else if($('#sevenBgImgMask .poster')[j].className == 'poster nextNext-active'){
			    	   	  $('#page_seven .defaultPoster')[0].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }
			    	   if($('#sevenBgImgMask .poster')[j].className == 'poster active myRollIn'){
			    	   	  $('#page_seven .defaultPoster')[2].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }else if($('#sevenBgImgMask .poster')[j].className == 'poster pre-active'){
			    	   	  $('#page_seven .defaultPoster')[1].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }else if($('#sevenBgImgMask .poster')[j].className == 'poster prePre-active'){
			    	   	  $('#page_seven .defaultPoster')[0].src = $('#sevenBgImgMask .poster')[j].src;
			    	   }
			    } 
			 });
			 for(var i=0; i<$('#sevenBgImgMask .poster').length; i++){
			 	$('#sevenBgImgMask .poster')[i].index = i;
			 	touch.on($('#sevenBgImgMask .poster')[i], 'touchstart', function(ev){		
				     ev.preventDefault();
				 });
				 touch.on($('#sevenBgImgMask .poster')[i], 'swipeleft', function(ev){
				 	if(preImgIndex != this.index){
				 		preImgIndex = this.index;
				 		imgIndex ++;
					 	if(imgIndex >= 15){
					 		imgIndex = 15;
					 	}
					 	$('#page_seven_icon')[0].style.bottom = - (preH / $('#sevenBgImgMask .poster').length) * imgIndex + 'px';
				 	}
                     for(var j=0; j<$('#sevenBgImgMask .poster').length; j++){
                     	if(j == this.index&&j!=$('#sevenBgImgMask .poster').length -1){
                   		$('#sevenBgImgMask .poster')[this.index].className = 'poster hide myRollOut';
                     	}else if(j == this.index + 1){
                     		$('#sevenBgImgMask .poster')[this.index + 1].className = 'poster active';
                     	}else if(j == this.index + 2){
                     		$('#sevenBgImgMask .poster')[this.index + 2].className = 'poster next-active';
                     	}else if(j == this.index + 3){
                     		$('#sevenBgImgMask .poster')[this.index + 3].className = 'poster nextNext-active';
                     	}else{
                     		$('#sevenBgImgMask .poster')[j].className = 'poster';
                     	}
                     }
                     if(this.index == $('#sevenBgImgMask .poster').length -1){
                     	$('#sevenBgImgMask .poster')[this.index].className = 'poster active';
                     }
				 });
				 touch.on($('#sevenBgImgMask .poster')[i], 'swiperight', function(ev){
				 	if(preImgIndex != this.index){
				 		preImgIndex = this.index;
				 		imgIndex --;
					 	if(imgIndex <= 0){
					 		imgIndex = 0;
					 	}
					 	$('#page_seven_icon')[0].style.bottom = - (preH / $('#sevenBgImgMask .poster').length) * imgIndex + 'px';
				 	}
				 	for(var j=0; j<$('#sevenBgImgMask .poster').length; j++){
                     	if(j == this.index){
                     		$('#sevenBgImgMask .poster')[this.index].className = 'poster pre-active';
                     	}else if(j == this.index - 1){
                     		$('#sevenBgImgMask .poster')[this.index - 1].className = 'poster active myRollIn';
                     	}else if(j == this.index + 1){
                     		$('#sevenBgImgMask .poster')[this.index + 1].className = 'poster prePre-active';
                     	}else{
                     		$('#sevenBgImgMask .poster')[j].className = 'poster';
                     	}
                     }
				 	if(this.index == 0){//修复
				 		$('#sevenBgImgMask .poster')[this.index].className = 'poster active';
				 		$('#sevenBgImgMask .poster')[this.index + 1].className = 'poster next-active';
				 		$('#sevenBgImgMask .poster')[this.index + 2].className = 'poster nextNext-active';
				 	}
				 });
			 }
   	   	  }else if(mySwiper.activeIndex == 8){
 	   	   	  pageEightEffect();
   	   	   }
   	   }
   },300);
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
   	  this.isTrueNum = -1;//统计转弯个数
   }
   DrawLine.prototype.lineToFn = function(cvs,turnPositionArr){
   	   //检测是否垂直及水平 防止出错
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
  	  		//toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8
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
  	  var b = this.offsetY - this.slope * this.offsetX;//y = k*x + b
  	  var _this = this;
  	  this.lineTimer = setInterval(function(){
  	     cvs.beginPath();
   	     cvs.strokeStyle = 'white';
   	     cvs.lineWidth = 1;
   	     cvs.moveTo(_this.startX,_this.startY);
  	  	//console.log(obj.lineFx);
		 switch(_this.lineFx){
		  	case 1:{//向上
		  		_this.offsetY -= _this.speed;
		  		if(_this.offsetY <= turnPositionArr[_this.lineIndex].y){
		  			_this.offsetY = turnPositionArr[_this.lineIndex].y;
		  		}
		  		cvs.lineTo(turnPositionArr[_this.lineIndex].x,_this.offsetY);
		  		cvs.stroke();//描边
//		  		cvs.moveTo(turnPositionArr[_this.lineIndex].x,_this.offsetY);
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
//		  		cvs.moveTo(turnPositionArr[_this.lineIndex].x,_this.offsetY);
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
		  		//cvs.moveTo(_this.offsetX,turnPositionArr[_this.lineIndex].y);
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
		  		//cvs.moveTo(_this.offsetX,turnPositionArr[_this.lineIndex].y);
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
		  	case 5:{//线段有斜率 左上
		  		//toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8
		  	    _this.offsetX -= _this.speed;
		  	    if(_this.offsetX <= turnPositionArr[_this.lineIndex].x){
		  	    	     _this.offsetX = turnPositionArr[_this.lineIndex].x;
		  	    }
		  	    _this.offsetY = _this.offsetX * _this.slope + b;
		  		cvs.lineTo(_this.offsetX,_this.offsetY);
		  		cvs.stroke();//描边
		  		//cvs.moveTo(_this.offsetX,_this.offsetY);
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
		  	case 6:{//线段有斜率 左下
		  		//toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8
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
		  		//cvs.moveTo(_this.offsetX,_this.offsetY);
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
		  	case 7:{//线段有斜率 右上
		  		//toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8
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
		  		//cvs.moveTo(_this.offsetX,_this.offsetY);
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
		  	case 8:{//线段有斜率 右下
		  		//toLeftTop = 5, toLeftBttom = 6, toRightTop = 7,toRightBottom = 8
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
		  		//cvs.moveTo(_this.offsetX,_this.offsetY);
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
   //闪烁圆
   function DrawArc(flashSpeed){
   	  this.flashSpeed = flashSpeed;
   	  this.timer = null;
   	  this.arcIndex = -1;
   }
   DrawArc.prototype.arcToFn = function(cvs,r1,r2,turnPositionArr,lineObj,DOMObj){
   	  var _this = this;
   	  this.timer = setInterval(function(){
   	  	 if(lineObj.lineIndex > turnPositionArr.length){
   	  	 	clearInterval(_this.timer);
   	  	 }
   	  	 if(lineObj.isTrueNum == -1){
   	  	 	return ;
   	  	 }
         if(_this.arcIndex != lineObj.isTrueNum){
   	  	 	_this.arcIndex = lineObj.isTrueNum;
   	  	 	var oDivs = document.createElement('div');
   	  	 	oDivs.className = 'flashArc';
   	  	 	oDivs.style.left = turnPositionArr[lineObj.isTrueNum].x - 6 + 'px';
   	  	 	oDivs.style.top = turnPositionArr[lineObj.isTrueNum].y - 6 + 'px';
   	  	 	DOMObj.appendChild(oDivs);
   	  	 	cvs.moveTo(turnPositionArr[lineObj.isTrueNum].x,turnPositionArr[lineObj.isTrueNum].y);
   	  	    var grd = cvs.createRadialGradient(turnPositionArr[lineObj.isTrueNum].x,turnPositionArr[lineObj.isTrueNum].y,r1,turnPositionArr[lineObj.isTrueNum].x,turnPositionArr[lineObj.isTrueNum].y,r2);
   	  	    grd.addColorStop(0,"white");
   	  	    grd.addColorStop(0.2,"#fefffd");
   	  	    grd.addColorStop(0.6,"#e8e8e8");
   	  	    grd.addColorStop(1,"#ccc");
            cvs.fillStyle = grd;
            cvs.arc(turnPositionArr[lineObj.isTrueNum].x,turnPositionArr[lineObj.isTrueNum].y,r2,0,Math.PI*2);
            cvs.fill();
   	  	 }
         //创建
   	  },30);
   }
   
   function DrawText(flashSpeed){
   	  this.flashSpeed = flashSpeed;
   	  this.timer = null;
   	  this.arcIndex = -1;
   }
});





















