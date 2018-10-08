/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('Traccar.view.CmdAndMessagePanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'CmdAndMsgView',
    
    title: 'Cmd & Msg View',
 
    requires: [
        'Traccar.view.CommandPanel',
        'Traccar.view.MessagePanel'
    ],
    split: true, 
    titleCollapse: false,
    collapsible: true,
    floatable: false,
    layout: {
       type: 'hbox',
       alignment: 'stretch'
    },
    
    items: [{        
        xtype: 'CommandView',
        collapsible: true,
        flex: 1
    },{        
        xtype: 'MessageView',                        
        collapsible: true,
        flex: 2
    },{        
        xtype: 'MessageView',
        title: 'Remote Picture',
        collapsible: true,
        flex: 1
    }]    
});