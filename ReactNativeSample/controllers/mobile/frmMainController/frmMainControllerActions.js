define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnCreateTask **/
    AS_Button_c8b03597e98c4e1789f9e29fd391fa86: function AS_Button_c8b03597e98c4e1789f9e29fd391fa86(eventobject) {
        var self = this;

        function MOVE_ACTION____ca939ce49e8f4012a152952f28e6ea16_Callback() {}
        self.onClick_Button.call(this);
        self.view.flxBackGround.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____ca939ce49e8f4012a152952f28e6ea16_Callback
        });
    },
    /** preShow defined for frmMain **/
    AS_Form_d54262a2a462405ca78852501d25ad43: function AS_Form_d54262a2a462405ca78852501d25ad43(eventobject) {
        var self = this;
        return self.postshow.call(this);
    }
});