/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for text blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.JavaScript.drivers');

goog.require('Blockly.JavaScript');

function shortToBytes(num){
	var buffer = new ArrayBuffer(2);
	var intArr = new Uint8Array(buffer);
	var s = new Int16Array(buffer);
	s[0] = num;
	return intArr;
}
function floatToBytes(num){
	var buffer = new ArrayBuffer(4);
	var intArr = new Uint8Array(buffer);
	var f = new Float32Array(buffer);
	f[0] = num;
	return intArr;
}
Blockly.JavaScript['driver_run'] = function(block) {
  var dir = (block.getFieldValue('DIRECTION')=="FORWARD")?1:-1;
  var speed = block.getFieldValue('SPEED');
  var spd1 = shortToBytes(dir*speed);
  var spd2 = shortToBytes(-dir*speed);
  var code = "FF 55 07 00 02 05 "+(spd1[0].toString(16))+" "+(spd1[1].toString(16))+" "+(spd2[0].toString(16))+" "+(spd2[1].toString(16));
  var code = 'document.location = "com.xeecos.blockly://demo?request="'+code;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['driver_turn'] = function(block) {
  var dir = (block.getFieldValue('DIRECTION')=="LEFT")?1:-1;
  var speed = block.getFieldValue('SPEED');
  var spd1 = shortToBytes(dir*speed);
  var spd2 = shortToBytes(dir*speed);
  var code = "FF 55 07 00 02 05 "+(spd1[0].toString(16))+" "+(spd1[1].toString(16))+" "+(spd2[0].toString(16))+" "+(spd2[1].toString(16));
  var code = 'document.location = "com.xeecos.blockly://demo?request="'+code;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
