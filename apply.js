
//Take input from user
module.exports = {
    // Define the prefix
    prefix: "!apply",
    // Define a function to pass the message to
    fn: (msg) => {
      let application = {}
      let filter = (msg) => !msg.author.bot;
      let options = {
        max: 1,
        time: 15000
      };

      msg.member.send("Thanks for offering your meal blocks! First, what is your name?")
        .then(dm => {
          // After each question, we'll setup a collector on the DM channel
          return dm.channel.awaitMessages(filter, options)
        })
        .then(collected => {
          // Convert the collection to an array & get the content from the first element
          seller.name = collected.array()[0].content;
          // Ask the next question
          return msg.member.send("Got it, now what's your discord tag?")
        })
        .then(dm => {
          return dm.channel.awaitMessages(filter, options)
        })
        .then(collected => {
          seller.discord = collected.array()[0].content;
          return msg.member.send("Excellent. Now, which restaurant?")
        })
        .then(dm => {
          return dm.channel.awaitMessages(filter, options)
        })
        .then(collected => {
          seller.place = collected.array()[0].content;
          return msg.member.send("Finally, what time?")
        })
        .then(dm => {
          return dm.channel.awaitMessages(filter, options)
        })
        .then(collected => {
          seller.time = collected.array()[0].content;
          console.log(seller)
        })
    }
}
