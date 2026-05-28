import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const { nome, email, telefone, desafio } = body

  if (!nome || !email || !telefone || !desafio) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Por favor, preencha todos os campos.'
    })
  }

  // Crie um transporter do nodemailer usando SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // true para a porta 465, false para outras portas (ex: 587)
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER || '"DMW Site" <contato@dmwflow.com.br>',
      to: 'contato@dmwflow.com.br',
      subject: `Novo Contato do Site: ${nome}`,
      html: `
        <h3>Novo formulário de contato</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Desafio:</strong></p>
        <p>${desafio}</p>
      `
    })

    return { success: true, message: 'E-mail enviado com sucesso.' }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Falha ao enviar o e-mail.'
    })
  }
})
