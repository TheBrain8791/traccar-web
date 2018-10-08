/*
 * Copyright 2018 Gerald Bart (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.view.CommandPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'CommandView',

    title: 'Cmd Panel',    
    hight: 200,
    componentCls: 'view-color-green',
    /*tbar: {        
        defaults: {
            xtype: 'button',
            disabled: false,
            tooltipType: 'title'
        },
        items: [{
            xtype: 'tbtext',
            html: 'my cmds',            
            disabled: false
        }, {
            xtype: 'tbfill',
            disabled: false
        }, {            
            reference: 'toolbarAddButton',
            glyph: 'xf067@FontAwesome',
            tooltip: 'my Cmd1'
        }, {            
            reference: 'toolbarEditButton',
            glyph: 'xf040@FontAwesome',
            tooltip: 'my Cmd2'
        }, {            
            reference: 'toolbarRemoveButton',
            glyph: 'xf00d@FontAwesome',
            tooltip: 'my Cmd2'
        }, {            
            reference: 'deviceCommandButton',
            glyph: 'xf093@FontAwesome',
            tooltip: 'my Cmd3'
        }]
    },
    */
    
    items: [{
        xtype: 'fieldset',
        reference: 'newCommandFields',
        disabled: false,
        items: [{
            xtype: 'checkboxfield',
            name: 'textChannel',
            reference: 'textChannelCheckBox',
            inputValue: true,
            uncheckedValue: false,
            fieldLabel: 'my checkbox'                
        }, {
            xtype: 'combobox',
            name: 'type',
            reference: 'commandType',
            fieldLabel: Strings.sharedType,
            store: 'CommandTypes',
            displayField: 'name',
            valueField: 'type',
            editable: false,
            allowBlank: false                
        }, {
            xtype: 'fieldcontainer',
            reference: 'parameters'
        }]
    }]    
});