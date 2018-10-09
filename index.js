module.exports = {

    // This example package will show you how to use DBox to create your own commands & functions.

    init: function(dbox, done){

        // Here we initialize our package. The bot's client is not available yet when this gets called.
        // Use this to install packages & Set up event listeners.

        // Temporary way to get required npm modules for installed packages. This will be gone when the repo is up.
        dbox.packages.InstallNodeModule('simple-random-emoji', (error,out)=>{

            // We'll require the newly installed modules and add it to our package's object.
            var randomEmoji = require('simple-random-emoji');


            // Now that our super awesome package is loaded, We'll define a command to use it!
            dbox.commands.add('emoji', {}, (command)=>{

                command.channel.send('Emoji: ' + randomEmoji())

            })            
            
            dbox.commands.add('setvar', {}, (command)=>{

                dbox.guildSettings.set(command.guild, "test", 'vvv')
                dbox.dataStore.save();

            })      

            dbox.commands.add('getvar', {}, (command)=>{

                command.channel.send(dbox.guildSettings.get(command.guild, "test"));

            })


            done();

        })

        // Here, Lets catch some discord.js events.
        // We use the dbox variable to listen to events, All discord.js events are passed along here along with all DBox added ones.
        // Feel free to use client.on though, if you do not want them.

        dbox.on('message', (message)=>{
            
            // Lets reply to to message
            if(message.content == "hello"){
                message.channel.send(client.user.id);
            }

        })

    }

}