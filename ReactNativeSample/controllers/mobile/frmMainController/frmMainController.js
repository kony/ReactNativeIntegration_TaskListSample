define({ 
  _count:0,
  _segLength:0,
  onClick_Button : function addReactContainer(){
    var ReactNativeContainer = new kony.ui.ReactNativeContainer({
      "id": "ReactNativeContainer",
      "isVisible": true,
      "left": "4%",
      "top": "25%",
      "width": "90%",
      "height":"50%",
      "centerX":"50%",
      "zIndex": 3
    }, {},{}); 
    if(this._count == 0 ){

      this.view.flxBackGround.add(ReactNativeContainer);


      //#ifdef android
      this.view.flxBackGround.setVisibility(true);
      this.view.ReactNativeContainer.reactNativeAppID="taskManager";
      //#endif

      //#ifdef iphone
      this.view.flxBackGround.setVisibility(true);
      this.view.ReactNativeContainer.reactNativeAppId="taskManager";
      //#endif
      this._count = this._count+1;
    }
    this.view.flxBackGround.setVisibility(true);
  }, 
  postshow: function(){
    debugger;
    kony.reactNative.setCallback(this.callback);
     var labelData = this.view.lblContents;
      this._segLength = 3;
      var data={};
      data["labelData"]=labelData;
      data["seg_length"]=this._segLength;
      this.view.TaskListCopy.getFormContext(this,data);
    //this.view.lblContents.setVisibility(true);
    this.view.TaskListCopy.segTasks.setVisibility(true);
    //var gestureInfo={"fingers":1, "taps":1};
    var setupTblTap = {fingers:1,taps:2};//double tap gesture
    //To add a TAP gesture recognizer on a hbox with ID hbx1 placed on a form frm1
    var tapGesture=this.view.flxBackGround.setGestureRecognizer(1,setupTblTap,this.myTap);
  },
  callback:function(id,args){
    if(id==="taskList"){
      this.setData(args);
    }
  },

  myTap:function(){
    this.view.flxBackGround.setVisibility(false);
  },

  setData:function(response){
    debugger;
    this.view.flxBackGround.left="100%";
    if(response["taskTitle"] != "" && response["desc"] != "" && response["date"] != "" ){
      this.view.lblContents.setVisibility(false);
      var segData = {
        lblHeader:response["taskTitle"],
        lblSubHeader:response["desc"],
        lblTime:response["date"],
        imgCheck:"konymplisttakscheck.png"
      };
      //this._segLength=this._segLength+1;
      this.view.TaskListCopy.segTasks.addDataAt(segData, 0);
      this._segLength+=1;
    }
    else{
      this._segLength = 3;
       var labelData = this.view.lblContents;
       var data={};
       data["labelData"]=labelData;
       data["seg_length"]=this._segLength;
       this.view.TaskListCopy.getFormContext(this,data);
    }

  }

  //Type your controller code here 

});