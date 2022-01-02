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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var battery = {
  "type": "battery",
  "message0": "बैटरी %1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/2687/battery.svg",
      "width": 60,
      "height": 60,
      "alt": "battery",
      "flipRtl": false
    }
  ],
  "output": "battery",
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['battery'] = {
  init: function() {
    this.jsonInit(battery);
  }
};

var connect = {
  "type": "connect",
  "message0": "जोड़ो %1 %2 %3 %4 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/2656/wired.svg",
      "width": 40,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "wire1",
      "check": [
        "wire_red",
        "wire_black"
      ]
    },
    {
      "type": "input_value",
      "name": "battery",
      "check": "battery"
    },
    {
      "type": "input_value",
      "name": "wire2",
      "check": [
        "wire_red",
        "wire_black"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['connect'] = {
  init: function() {
    this.jsonInit(connect);
  }
};

var wire_red = {
  "type": "wire_red",
  "message0": "लाल तार %1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://drive.google.com/uc?export=download&id=1FKP6bMLN8ayBOA5tpVVc63YcHyXwJ28c",
      "width": 100,
      "height": 30,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "output": "wire_red",
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['wire_red'] = {
  init: function() {
    this.jsonInit(wire_red);
  }
};

var wire_black = {
  "type": "wire_black",
  "message0": "काला तार %1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://drive.google.com/uc?export=download&id=1EVCawk0Ynr6q7mgK4a8xw-IZSM3X8b0G",
      "width": 100,
      "height": 30,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "output": "wire_black",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['wire_black'] = {
  init: function() {
    this.jsonInit(wire_black);
  }
};

var rotate = {
  "type": "rotate",
  "message0": "घुमाएँ %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/13015/d9d142be-2eb9-49d5-a189-58352640c754.svg",
      "width": 50,
      "height": 50,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "angle",
      "value": 0,
      "min": 0,
      "max": 270,
      "precision": 90
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "magnet"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 75,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['rotate'] = {
  init: function() {
    this.jsonInit(rotate);
  }
};

var magnet = {
  "type": "magnet",
  "message0": "चुंबक %1",
  "args0": [
    {
      "type": "field_image",
      "src": "https://drive.google.com/uc?export=download&id=1xibyqHXhroyqIi09YVGSuZzSYcfnteJ2",
      "width": 60,
      "height": 60,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "output": "magnet",
  "colour": 315,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['magnet'] = {
  init: function() {
    this.jsonInit(magnet);
  }
};

var disconnect = {
  "type": "disconnect",
  "message0": "डिस्कनेक्ट %1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/3458/delete.svg",
      "width": 40,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/2656/wired.svg",
      "width": 40,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['disconnect'] = {
  init: function() {
    this.jsonInit(disconnect);
  }
};

var increase = {
  "type": "increase",
  "message0": "बढ़ाएं %1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "https://assets.dryicons.com/uploads/icon/svg/8488/b30ceaac-4455-4e77-9449-86da4cba997d.svg",
      "width": 40,
      "height": 40,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "battery",
        "magnet"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['increase'] = {
  init: function() {
    this.jsonInit(increase);
  }
};

var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};
