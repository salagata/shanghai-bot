require("dotenv").config();

const token = process.env.DISCORD_TOKEN;

// Import the discord.js module
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance with intents
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Define your prefix
const prefix = "a>";

// When the bot is ready
client.once('clientReady', () => {
    console.log('Bot is online!');
});

// Listen for messages
client.on('messageCreate', message => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Check if message starts with prefix
    if (!message.content.startsWith(prefix)) return;

    // Extract command name and arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Handle commands
    if (command === 'ping') {
        message.channel.send('Pong!');
    } else if (command === 'say') {
        const text = args.join(' ');
        if (text) {
            message.channel.send(text);
        } else {
            message.channel.send('You didn\'t provide a message!');
        }
    }
    // Add more commands as needed
});

// Log in to Discord with your bot's token
client.login(token);
// setTimeout(() => {client.destroy()},10000)