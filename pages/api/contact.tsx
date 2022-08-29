import nodemailer from "nodemailer"

export default (req, res) => {
  var transport = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  }

  var transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log(error)
    } else {
      console.log("server is ready to take messages")
    }
  })

  const data = JSON.parse(req.body)

  const name = data.name
  const mail = data.mail
  const message = data.message
  console.log(data.name)
  const content = `name: ${name} \n email: ${mail} \n message: ${message}`

  const email = {
    from: name,
    to: "j.aghebati93@gmail.com",
    subject: "new message from contact form",
    text: content
  }

  transporter.sendMail(email, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        status: "fail"
      })
    } else {
      res.json({
        status: "mail sent"
      })
    }
  })
}
