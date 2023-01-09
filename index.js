const blockUsers = []

on("receive", function (req) {
  if (blockUsers.includes(req.usrname)) return null
  return req
})

on("send", function (req) {
  if (!req.msg.startsWith("/mute")) {
    return req
  }
  blockUsers.push(req.msg.slice(6))
  return null
})
