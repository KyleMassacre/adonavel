'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthenticationController {


  showLogin({view}) {
    return view.render('auth.login')
  }

  showRegister({view}) {
    return view.render('auth.register')
  }

  async doLogin({auth, request, session, response}) {
    const { email, password, remember } = request.all()

    await auth.remember(remember == 'on' ? true : false).attempt(email, password)
    return response.redirect('/home')
  }

  async doRegister({auth, request, session, response}) {
    const { username, email, password, remember } = request.all()

    try {
      const user = await User.create({
        username : username,
        password : password,
        email : email
      })

      await auth.login(user)
      return response.redirect('home')

    } catch (error) {
      console.log(error)
      session.flash({ error: 'There was an error creating your account' })
      return response.redirect('back')
    }
  }

  async logout({auth, response}) {
    await auth.logout()
    return response.redirect('login')
  }

}

module.exports = AuthenticationController
