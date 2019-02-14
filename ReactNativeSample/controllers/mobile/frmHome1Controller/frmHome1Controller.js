define({ 
  _count:0,
  onClick_Button : function addReactContainer(){
   this.view.segTaskList.setVisibility(false);
   this.view.btnCreateTask.setVisibility(false);
   var ReactNativeContainer = new kony.ui.ReactNativeContainer({
                            "height": "85%",
                            "id": "ReactNativeContainer",
                            "isVisible": true,
                            "left": "4%",
                            "top": "30%",
                            "width": "90%",
                            "centerX":"50%",
                            "backgroundColor":"#000000",
                            "zIndex": 2
                        }, {
                        },
                        {
                        }); 

    this.view.add(ReactNativeContainer);
        
//#ifdef android
    this.view.ReactNativeContainer.reactNativeAppID="taskManager";
//#endif
    
//#ifdef iphone
    this.view.ReactNativeContainer.reactNativeAppId="taskManager";
//#endif
  }, 
  postshow: function(){
       kony.reactNative.setCallback(this.callback);
       
},
  callback:function(id,args){
    if(id==="taskList"){
      this.setData(args);
    }
  },
 
  setData:function(response){
    var data = {
      lblTaskId:response["taskId"],
      lblTaskDescription:response["desc"],
      lblScheduledTime:response["date"]};
    this.view.ReactNativeContainer.setVisibility(false);
    this.view.segTaskList.setVisibility(true);
    this.view.btnCreateTask.setVisibility(true);
    //this.view.segTaskList.setData([data]);
    this.view.segTaskList.addDataAt(data, this._count);
    //this.view.segTaskList.setDataAt(data,this._count);
    this._count++;
  }

 });