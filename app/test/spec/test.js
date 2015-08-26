/* global describe, it */

(function () {
  'use strict';

  describe('', function () {

    describe('By default', function () {

      it('container with id "more" should be hidden', function(){
        expect($('#more')).not.toBe(':visible');
      });

      it('button should have the label "Show more"', function(){
        expect($('#btn-show-more')).toHaveText("Show more");
      });
    });

    describe('When button was clicked', function () {
      beforeEach(function(){
        $('#btn-show-more').click();
      });

      it('container with id "more" should be visible', function(){
        expect($('#more')).toBe(':visible');
      });

      it('button should have the label "Show less"', function(){
        expect($('#btn-show-more')).toHaveText("Show more");
      });
    });
  });

})();
