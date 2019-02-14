define(function() {
      
      return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
         this._lblContext="";
         this._segLength=0;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
     swipeDetected:function(widgetInfo,swipeInfo){
      if(this._segLength > 1){
        this.view.segTasks.removeAt(swipeInfo.row, swipeInfo.section);
        this._segLength --;
      }
       else{
          this.view.segTasks.removeAt(swipeInfo.row, swipeInfo.section);
           this._lblContext.setVisibility(true);
           this._lblContext.text="0 tasks created, create a task to continue";
       }
     },
        getFormContext:function(self,response){
        // this.setDefaultDataToSegment();
         this._lblContext = response["labelData"];
         this._segLength = response["seg_length"];
          
         
        },
        
        setDefaultDataToSegment(){
          debugger;
          var data=[
            {
              lblHeader:"testing on V8 SP4 features.",
              lblSubHeader:"test react-native app in kony.",
              lblTime:"11/02/2019",
              imgCheck:"konymplisttakscheck.png"
            },
            {
              lblHeader:"test on map faeture",
              lblSubHeader:"test of pinch and zoom in map widget.",
              lblTime:"12/02/2019",
              imgCheck:"konymplisttakscheck.png"
            },
            {
              lblHeader:"self practice",
              lblSubHeader:"create a sample react-native app with form validations",
              lblTime:"12/02/2019",
              imgCheck:"konymplisttakscheck.png"
            }
           ];
         this.view.segTasks.setData(data);
          this.view.forceLayout();
        }
       }
       
   });