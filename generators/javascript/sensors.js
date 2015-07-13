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

goog.provide('Blockly.JavaScript.sensors');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['sensor_ultrasonic'] = function(block) {
  // Text value.
  var port = block.getFieldValue('PORT');
  var code = "getSensorValue('ultrasonic',"+port.split('PORT')[1]+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['sensor_light'] = function(block) {
  // Text value.
  var port = block.getFieldValue('PORT');
  var code = "getSensorValue('light',"+port.split('PORT')[1]+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['sensor_linefollower'] = function(block) {
  // Text value.
  var port = block.getFieldValue('PORT');
  var code = "getSensorValue('linefollower',"+port.split('PORT')[1]+")";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
