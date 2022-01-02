/**
 * @license
 * 
 * Copyright 2019 Google LLC
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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from 'blockly/core';
import 'blockly/javascript';

Blockly.JavaScript['battery'] = function (block) {
    return 'I got the battery\n';
}

Blockly.JavaScript['increase'] = function (block) {
    if (block.childBlocks_.length === 2) {
        var x = 0
        for (var i = 0; i < block.childBlocks_.length; i++) {
            if(block.childBlocks_[i].type === 'connect' || block.childBlocks_[i].type === 'battery'){
                x += 1;
            }
        }
        if(x === 2)
            return '8'
    }
    return '9\n';
}

Blockly.JavaScript['connect'] = function (block) {
    if (block.childBlocks_.length === 4){
        var x = 0
        for (var i = 0; i < block.childBlocks_.length; i++) {
            if(block.childBlocks_[i].type === 'wire_red' || block.childBlocks_[i].type === 'wire_black' || block.childBlocks_[i].type === 'battery' || block.childBlocks_[i].type === 'disconnect'){
                x += 1;
            }
        }
        if(x === 4)
            return '1'
    }
    return '0';
}

Blockly.JavaScript['wire_red'] = function (block) {
    return 'I got the wire red\n';
}

Blockly.JavaScript['wire_black'] = function (block) {
    return 'I got the wire black\n';
}

Blockly.JavaScript['rotate'] = function (block) {
    if (block.childBlocks_.length === 2) {
        var x = 0
        for (var i = 0; i < block.childBlocks_.length; i++) {
            if(block.childBlocks_[i].type === 'magnet'){
                x += 1;
            }
        }
        if(x === 1)
            return '5'
    }
    return '6\n';
}

Blockly.JavaScript['magnet'] = function (block) {
    return 'I got the magnet\n';
}

Blockly.JavaScript['disconnect'] = function (block) {
    return '2';
}

Blockly.JavaScript['test_react_field'] = function (block) {
    return 'console.log(\'custom block\');\n';
};

Blockly.JavaScript['test_react_date_field'] = function (block) {
    return 'console.log(' + block.getField('DATE').getText() + ');\n';
};
