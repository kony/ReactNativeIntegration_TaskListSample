count = 0;
define({ 
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
                        }, {
                        },
                        {
                        }); 
    if(count == 0 ){

    this.view.flxBackGround.add(ReactNativeContainer);
        
//#ifdef android
    this.view.ReactNativeContainer.reactNativeAppID="taskManager";
//#endif
    
//#ifdef iphone
    this.view.ReactNativeContainer.reactNativeAppId="taskManager";
//#endif
      count = count + 1;
    }
  }, 
  postshow: function(){
       debugger;
       kony.reactNative.setCallback(this.callback);
       this.view.lblContents.setVisibility(true);
       this.view.TaskList.segTasks.setVisibility(true);
   
},
  callback:function(id,args){
    if(id==="taskList"){
      this.setData(args);
    }
  },
 
  setData:function(response){
    debugger;
    this.view.lblContents.setVisibility(false);
    this.view.flxBackGround.left="100%";
    var data = {
      lblHeader:response["taskTitle"],
      lblSubHeader:response["desc"],
      lblTime:response["date"],
      imgCheck:"konymplisttakscheck.png"
    };
   // this.view.ReactNativeContainer.setVisibility(false);
    var labelData = this.view.lblContents;
    
    var count = count + 4;
    var data={};
    data["labelData"]=labelData;
    data["seg_length"]=count;
    this.view.TaskList.getFormContext.bind(this,data);
    this.view.TaskList.segTasks.addDataAt(data, 0);
    count++;
  }
    
 //Type your controller code here 

 });