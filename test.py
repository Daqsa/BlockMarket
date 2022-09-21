# bot.py
import os

import discord
from dotenv import load_dotenv
from discord.ext import commands

bot = commands.Bot(command_prefix='$')

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

mainchat = client

@client.event
async def on_ready():
    print(f'{client.user} has connected to Discord!')

@client.event
async def on_message(message):
    mainchat = message.channel
    print(message.channel)
    if message.author == client.user:
        return
    if message.content == 'hello':
        await message.channel.send('Hey')  
    await message.channel.send('Ran')

@client.event
async def on_message_dm(message):
    if message.author == client.user:
        return
      
    # DM the bot
    if not message.guild:
        try:
            await message.channel.send("Your block listing has been posted.")
            # send a message to the general chat
            await discord.channel
        except discord.errors.Forbidden:
            pass
    else:
        pass

client.run(TOKEN)
