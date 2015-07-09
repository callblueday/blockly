/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.sensors');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.sensors.HUE = 140;

Blockly.Blocks['sensor_ultrasonic'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.sensors.HUE);
	var dropdown = new Blockly.FieldDropdown([['Port 1', 'PORT1'], ['Port 2', 'PORT2'], ['Port 3', 'PORT3'], ['Port 4', 'PORT4']]);
    //this.appendDummyInput()
    
    this.appendDummyInput().appendField('Ultrasonic')
    .appendField(dropdown, 'PORT');
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
	this.setNextStatement(false);
	this.setPreviousStatement(false);
  }
};
Blockly.Blocks['sensor_linefollower'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.sensors.HUE);
	var dropdown = new Blockly.FieldDropdown([['Port 1', 'PORT1'], ['Port 2', 'PORT2'], ['Port 3', 'PORT3'], ['Port 4', 'PORT4']]);
    //this.appendDummyInput()
    
    this.appendDummyInput().appendField('Line Follower')
    .appendField(dropdown, 'PORT');
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
	this.setNextStatement(false);
	this.setPreviousStatement(false);
  }
};
Blockly.Blocks['sensor_light'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.sensors.HUE);
	var dropdown = new Blockly.FieldDropdown([['On Board', 'ONBOARD'],['Port 3', 'PORT3'], ['Port 4', 'PORT4']]);
    //this.appendDummyInput()
    
    this.appendDummyInput().appendField('Light')
    .appendField(dropdown, 'PORT');
    this.setInputsInline(true);
	this.setOutput(true, 'Number');
	this.setNextStatement(false);
	this.setPreviousStatement(false);
  }
};