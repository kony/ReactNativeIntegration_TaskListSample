define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCreateTask **/
    AS_Button_e07a3ad1b9c2487e989584229cc8fac4: function AS_Button_e07a3ad1b9c2487e989584229cc8fac4(eventobject) {
        var self = this;

        function ___ide_onClick_g99827b417304869b7e131f8857f853b_Callback() {
            self.onClick_Button.call(this);
        }
        self.view.flxBackGround.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0.001,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": ___ide_onClick_g99827b417304869b7e131f8857f853b_Callback
        });
    },
    /** onRowClick defined for segTasks **/
    AS_Segment_a2e19b375d4945bf889bd50d9ad82cd8: function AS_Segment_a2e19b375d4945bf889bd50d9ad82cd8(eventobject, sectionNumber, rowNumber) {
        var self = this;
        alert(this.view.TaskList.segTasks.selectedRowItems[0]);
    },
    /** preShow defined for frmHome **/
    AS_Form_aafeb40c9aa24ce4aad862e045c60156: function AS_Form_aafeb40c9aa24ce4aad862e045c60156(eventobject) {
        var self = this;
        return self.postshow.call(this);
    }
});