/*
 * iemedia-postcss
 * CSS Post Processor for stripping unwanted media tags from IE based on pattern matching
 *
 * Copyright (c) 2015 iCrossing
 * Licensed under the MIT license.
 */

'use strict';
var postcss = require('postcss');

module.exports = function(avoid) {
	var processor = postcss(function(css){
      css.eachAtRule(function(atRule){
        var i;
        var found=false;
        i=avoid.length;
        
        while(i--){
          if(atRule.params.indexOf(avoid[i])>-1){
            found=true;
          }
        }

        if(found){ // remove it if it matches
          atRule.removeSelf();
        }else{
          // Splice in the children of the rule
          if(atRule.nodes !== undefined){
            i=atRule.nodes.length;
            var first = atRule.nodes[0];
            var last = atRule.nodes[atRule.nodes.length-1];
            
            first.before = (atRule.before?atRule.before:"") + (first.before?first.before:"");
            last.after = (last.after?last.after:"") + (atRule.after?atRule.after:""); 

            while(i--){
              if(atRule.nodes[i] !== undefined){
                atRule.parent.insertAfter(atRule,atRule.nodes[i]);
              }
            }
          }
          atRule.removeSelf();
        }
      });
    });

	return processor;
}