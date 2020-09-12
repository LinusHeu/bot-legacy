const { Command } = require('discord-akairo')
const config = require('../config.json')
const fs = require('fs')
const { MessageEmbed } = require('discord.js')
const { embed } = require('../bot')

class HelpCommand extends Command {
  constructor() {
    super('help', {
      aliases: ['help', '?'],
      channel: 'guild',
      description: 'Displays the help page.'
    })
  }

  exec(message) {
    var helpEmbed = new MessageEmbed(embed)
      .setTitle('Arduino Bot Help')
      .setTimestamp(new Date())

    this.handler.modules.each(module => {
      helpEmbed.addField(`${config.prefix}${module.aliases[0]}`, module.description, true)
    })
    message.channel.send(helpEmbed)
  }
}
module.exports = HelpCommand
