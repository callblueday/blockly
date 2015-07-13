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

goog.provide('Blockly.Blocks.drivers');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.drivers.HUE = 150;

Blockly.Blocks['driver_run'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.drivers.HUE);
	var dropdown = new Blockly.FieldDropdown([['Forward', 'FORWARD'], ['Backward', 'BACKWARD']]);
    //this.appendDummyInput()
    
    this.appendValueInput('SPEED')
    .setCheck('Number')
    .appendField('Run')
    .appendField(dropdown, 'DIRECTION');
    this.setInputsInline(true);
	this.setNextStatement(true);
	this.setPreviousStatement(true);
  }
};

Blockly.Blocks['driver_turn'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.drivers.HUE);
	var dropdown = new Blockly.FieldDropdown([['left', 'LEFT'], ['right', 'RIGHT']]);
    //this.appendDummyInput()
    
    this.appendValueInput('SPEED')
    .setCheck('Number')
    .appendField('Turn')
    .appendField(dropdown, 'DIRECTION');
    this.setInputsInline(true);
	this.setNextStatement(true);
	this.setPreviousStatement(true);
  }
};
