let assert = require("assert");
let isWeekday = require("../isWeekday");
describe('isWeekday function', function(){

    it('should display true if the output is on weekdays', function(){

        assert.equal(isWeekday("Monday"),true);
    });

    it('should display true if the output is on weekdays', function(){

        assert.equal(isWeekday("Tuesday"),true);
    });
    it('should display true if the output is on weekdays', function(){

        assert.equal(isWeekday("wednesday"),true);
    });

    it('should display true if the output is on weekdays', function(){

        assert.equal(isWeekday("Thursday"),true);
    });
    it('should display true if the output is on weekdays', function(){

        assert.equal(isWeekday("Friday"),true);
    });

    it('should display false if the output is on weekends', function(){
        // this test will fail - can you fix it?
        assert.equal(isWeekday("Sunday"),false);
    });
    it('should display false if the output is on weekends', function(){
        // this test will fail - can you fix it?
        assert.equal(isWeekday("Saturday"),false);
    });
});
