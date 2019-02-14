define(function() {
      
      return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
         this._lblContext="";
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
     swipeDetected:function(widgetInfo,swipeInfo){
       var segmentLength = this.view.segTasks.data.length;
       if(segmentLength == 1){
          this.view.segTasks.removeAt(swipeInfo.row, swipeInfo.section);
           this._lblContext.setVisibility(true);
           this._isSegEmpty=true;
           this._lblContext.text="0 tasks created, create a task to continue";
       }
       else{
          this.view.segTasks.removeAt(swipeInfo.row, swipeInfo.section);
       }
     },
        getFormContext:function(response){
         this._lblContext = response["labelData"];
       }
        
       }
       
   });